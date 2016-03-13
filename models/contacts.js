var dbconn = require('../libs/database/database_connection');
var Promise = require('bluebird');


var contacts = {

    /*
    * This gets all people in a list of people.
    */
    list: function(){
        return new Promise(function (resolve, reject) {
            dbconn.query("SELECT ID, FIRST_NAME, LAST_NAME, ACTIVE_INDICATOR FROM PERSONS", function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    /*
    * This saves new people into the database
    */
    save: function(person_data, address_data){
      var person_promise = new Promise(function(resolve, reject) {
          dbconn.query("INSERT INTO PERSONS set ? ",[person_data], function (err, rows) {
              return (err ? reject(err) : resolve(rows.insertId));//InsertId is grabbing the mysql ID# from the insert, this will need to change when we switch to GUUID
          });
      });
      var address_promise = new Promise(function(resolve, reject) {
          dbconn.query("INSERT INTO ADDRESSES set ? ",[address_data], function (err, rows) {
              return (err ? reject(err) : resolve(rows.insertId));//InsertId is grabbing the mysql ID# from the insert, this will need to change when we switch to GUUID
          });
      });
      /*
       * This says wait for the first 2 promises to finish, and then send them the last inserted ID's to our next query
       */
      return Promise.join(person_promise, address_promise, function(result_person_promise, result_address_promise){
          dbconn.query("INSERT INTO PERSON_ADDRESSES (PERSON_ID, ADDRESS_ID) VALUES (?, ?)", [result_person_promise, result_address_promise], function (err) {
              if(err)
                    console.log("Error Selecting : %s ", err);
          });
      });
    },

    //TODO Will need to update this to query address and phone number and everything else separately. so we can do for loops in our view
    /*
    * This gets the edit data for the person you are trying to edit. Which include:
    * First Name, Last Name, Middle Name, Address, Address Line1, Address Line2, City, State, Country, Postal Code
    */
    edit: function(id){
        return new Promise(function(resolve, reject){
            dbconn.query("SELECT a.ID PERSON_ID, a.FIRST_NAME, a.LAST_NAME, a.MIDDLE_NAME, b.ID ADDRESS_ID, b.LINE1, b.LINE2, b.CITY, b.STATE_OR_PROVINCE, b.COUNTRY, b.POSTAL_CODE FROM PERSON_ADDRESSES c INNER JOIN PERSONS a on a.ID = c.PERSON_ID INNER JOIN ADDRESSES b on b.ID = c.ADDRESS_ID where a.ID = ?", [id], function(err, rows){
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    save_edit: function(id, address_id, person_data, address_data){
        var people_promise = new Promise(function(resolve, reject){
            dbconn.query("UPDATE PERSONS set ? WHERE id = ? ",[person_data,id],function(err,rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
        var address_promise = new Promise(function(resolve, reject) {
            dbconn.query("UPDATE ADDRESSES set ? WHERE ID = ?",[address_data, address_id], function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });

        return Promise.join(people_promise, address_promise);
    }

};

module.exports = contacts;