var dbconn = require('../libs/database/database_connection');
var Promise = require('bluebird');

var user = {

    list : function(){
        return new Promise(function (resolve, reject) {
            dbconn.query("SELECT ID, USERNAME, ACTIVE_FLAG, PASSWORD FROM USERS ", function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    edit : function (id){
        return new Promise(function (resolve, reject) {
            dbconn.query("SELECT ID, USERNAME, ACTIVE_FLAG, PASSWORD FROM USERS WHERE ID = ? ",[id], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    save : function(data){
        return new Promise(function (resolve, reject) {
            dbconn.query("INSERT INTO USERS set ? ",[data], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    save_edit : function(id, data){
        return new Promise(function (resolve, reject) {
            dbconn.query("UPDATE USERS set ? WHERE ID = ?",[data,id], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    delete_user : function(id){
        var promise_one = new Promise(function(resolve, reject){
            dbconn.query("UPDATE ROLE_USERS set ACTIVE_FLAG = 'N' WHERE USER_ID = ?",[id],function(err,rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
        var promise_two = new Promise(function(resolve, reject) {
            dbconn.query("UPDATE USERS set ACTIVE_FLAG = 'N' WHERE ID = ?",[id], function (err, mods) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(mods));
            });
        });
        return Promise.join(promise_one, promise_two)
    },

    search : function(username){
        return new Promise(function (resolve, reject) {
            dbconn.query('SELECT * FROM USERS WHERE USERNAME = ?',[username], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    }

};

module.exports = user;