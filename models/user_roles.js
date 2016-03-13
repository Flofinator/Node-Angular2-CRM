var dbconn = require('../libs/database/database_connection');
var Promise = require('bluebird');

var user_role = {

    list : function(){
        return new Promise(function (resolve, reject) {
            dbconn.query('SELECT a.ID USER_ID, a.USERNAME, b.ID ROLE_ID, b.ROLE_NAME, c.ACTIVE_FLAG from infra.ROLE_USERS c INNER JOIN infra.ROLES'
     +                 ' b on c.ROLE_ID = b.ID INNER JOIN infra.USERS a on c.USER_ID = a.ID', function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    add : function (){
        return new Promise(function (resolve, reject) {
            dbconn.query("SELECT ID AS USER_ID, USERNAME AS VALUE, 'U' AS TYPE FROM USERS UNION SELECT ID, ROLE_NAME, 'R' FROM ROLES ORDER BY TYPE", function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    save : function(data){
        return new Promise(function (resolve, reject) {
            dbconn.query("INSERT INTO ROLE_USERS set ?",[data], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    delete_user : function(user_id, role_id){
        return new Promise(function (resolve, reject) {
            dbconn.query("UPDATE ROLE_USERS set ACTIVE_FLAG = 'N' WHERE USER_ID = ? and ROLE_ID = ?",[user_id, role_id], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    reactivate : function(user_id, role_id){
        return new Promise(function (resolve, reject) {
            dbconn.query("UPDATE ROLE_USERS set ACTIVE_FLAG = 'Y' WHERE USER_ID = ? and ROLE_ID = ? ",[user_id, role_id], function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    //TODO Needs to be fixed
    search : function(username){
        return new Promise(function (resolve, reject) {
            dbconn.query('SELECT * FROM ROLE_USERS WHERE USERNAME like ? ','%'+[username]+'%', function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    }
}


module.exports = user_role;