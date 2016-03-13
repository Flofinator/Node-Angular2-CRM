var dbconn = require('../libs/database/database_connection');
var Promise = require('bluebird');

var role = {

    list: function(){
        return new Promise(function (resolve, reject) {
            dbconn.query('SELECT ID, ROLE_NAME, DESCRIPTION, ACTIVE_FLAG FROM ROLES ', function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    edit: function(id){
        var promise_one = new Promise(function(resolve, reject){
            dbconn.query('SELECT ID, ROLE_NAME, DESCRIPTION, ACTIVE_FLAG FROM ROLES WHERE ID = ? ',[id],function(err,rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
        var promise_two = new Promise(function(resolve, reject) {
            dbconn.query('SELECT ROLE_ID, MODULE_NAME, INSERT_ALLOWED_FLAG, UPDATE_ALLOWED_FLAG, DELETE_ALLOWED_FLAG, QUERY_ONLY FROM ROLE_MODULES WHERE ROLE_ID = ? ',[id], function (err, mods) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(mods));
            });
        });
        var promise_three = new Promise(function(resolve, reject) {
            dbconn.query('SELECT MODULE_NAME from MODULE_MASTER where MODULE_NAME NOT IN (SELECT MODULE_NAME from ROLE_MODULES WHERE ROLE_ID = ?) ',[id], function (err, new_mods) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(new_mods));
            });
        });
        return Promise.join(promise_one, promise_two, promise_three);
    },

    save: function(data){
      return new Promise(function(resolve, reject) {
          dbconn.query('INSERT INTO ROLES set ?',[data], function (err, rows) {
              return (err ? reject(err) : resolve(rows));
          });
      });
    },

    save_edit: function(id, role_data, active_module_name, active_module, new_module_name, new_module){
        //id, role_data, active_module_name, active_module, new_module_name, new_module
        var promise_one = new Promise(function(resolve, reject){
            dbconn.query('UPDATE ROLES set ? WHERE id = ?',[role_data,id],function(err,rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
        if(active_module !== null) {
            var promise_two = new Promise(function (resolve, reject) {
                dbconn.query('UPDATE ROLE_MODULES set ? WHERE ROLE_ID = ? and MODULE_NAME = ? ', [active_module, id, active_module_name], function (err, rows) {
                    if (err)
                        console.log("Error Selecting : %s ", err);
                    return (err ? reject(err) : resolve(rows));
                });
            });
        }
        if(new_module !== null) {
            var promise_three = new Promise(function (resolve, reject) {
                dbconn.query('INSERT INTO ROLE_MODULES (ROLE_ID, MODULE_NAME, INSERT_ALLOWED_FLAG, UPDATE_ALLOWED_FLAG, DELETE_ALLOWED_FLAG, QUERY_ONLY) VALUES (?, ?, ?, ?, ?, ?)',[id, new_module_name, new_module.INSERT_ALLOWED_FLAG, new_module.UPDATE_ALLOWED_FLAG, new_module.DELETE_ALLOWED_FLAG, new_module.QUERY_ONLY], function (err, rows) {
                    if (err)
                        console.log("Error Selecting : %s ", err);
                    return (err ? reject(err) : resolve(rows));
                });
            });
        }
        if(new_module !== null && active_module !== null){
            return Promise.join(promise_one, promise_two, promise_three);
        }else if(active_module !== null){
            return Promise.join(promise_one, promise_two);
        }else if(new_module !== null){
            return Promise.join(promise_one, promise_three);
        }else{
            return promise_one;
        }
    },

    delete_user : function(id){
        var promise_one = new Promise(function(resolve, reject){
            dbconn.query('UPDATE ROLE_USERS set ACTIVE_FLAG = "N" WHERE ROLE_ID = ?',[id],function(err,rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
        var promise_two = new Promise(function(resolve, reject) {
            dbconn.query('UPDATE ROLES set ACTIVE_FLAG = "N" WHERE ID = ? ',[id], function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
        return Promise.join(promise_one, promise_two);
    },

    search : function(role){
        return new Promise(function(resolve, reject){
            dbconn.query('SELECT ID, ROLE_NAME, DESCRIPTION FROM ROLES WHERE ROLE_NAME like ? ','%'+[role]+'%', function (err, rows) {
                if(err)
                    console.log("Error Selecting : %s ", err);
                return (err ? reject(err) : resolve(rows));
            });
        });
    },

    ajax : {

        applied_role_modules : function(id, module_name){
            return new Promise(function(resolve, reject) {
                dbconn.query('SELECT ROLE_ID, MODULE_NAME as NAME, INSERT_ALLOWED_FLAG, UPDATE_ALLOWED_FLAG, DELETE_ALLOWED_FLAG, QUERY_ONLY  from ROLE_MODULES WHERE ROLE_ID = ? AND MODULE_NAME = ? ', [id, module_name], function (err, rows) {
                    if (err)
                        console.log("Error Selecting : %s ", err);
                    return (err ? reject(err) : resolve(rows));
                });
            });
        },

        new_role_modules : function(id){
            return new Promise(function(resolve, reject) {
                dbconn.query('SELECT MODULE_NAME as NAME from MODULE_MASTER where MODULE_NAME NOT IN (SELECT MODULE_NAME from ROLE_MODULES WHERE ROLE_ID = ?) ',[id], function (err, rows) {
                    if (err)
                        console.log("Error Selecting : %s ", err);
                    return (err ? reject(err) : resolve(rows));
                });
            });
        }

    }

};


module.exports = role;