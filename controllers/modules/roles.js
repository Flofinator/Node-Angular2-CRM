
var role_model = require('../../models/roles');


var roles_controller = {

    list: function(req, res) {
        role_model.list().then(function (rows) {
            res.json({data: rows});
        });
    },


    add : function(req, res){
      res.render('roles/add_role',{page_title:"Add Roles-Node.js"});
    },


    edit : function(req, res){
      var id = req.params.id;
      role_model.edit(id).then(function(rows){
          var basic_info = rows[0];
          var mods = rows[1];
          var new_mods = rows[2];
          res.json({new_modules:new_mods, modules:mods, data:basic_info});
      });
    },


    save : function(req,res){
        role_model.save(req.body).then(function(){
            console.log('Role Add was successful!')
        });
    },


    save_edit : function(req,res){
        /*
        var id = req.body.id;
        //role_data contains ROLE_NAME, DESCRIPTION, and ACTIVE_FLAG
        var role_data = req.body.role_data;
        var active_module_name = req.body.active_module_name;
        var new_module_name = req.body.new_module;
        var role_data = {
                ACTIVE_FLAG  : input.active_flag,
                ROLE_NAME    : input.role_name,
                DESCRIPTION   : input.description
            };
            var active_module_name = input.active_module;
            var new_module_name = input.new_module;*/
            if(req.body.active_module) {
                var active_module = {
                    INSERT_ALLOWED_FLAG: req.body.active_module.INSERT_ALLOWED_FLAG,
                    UPDATE_ALLOWED_FLAG: req.body.active_module.UPDATE_ALLOWED_FLAG,
                    DELETE_ALLOWED_FLAG: req.body.active_module.DELETE_ALLOWED_FLAG,
                    QUERY_ONLY: req.body.active_module.QUERY_ONLY
                };
            }else{
                var active_module = null;
            }
        if(req.body.new_module) {
            var new_module = {
                INSERT_ALLOWED_FLAG: (req.body.new_module.INSERT_ALLOWED_FLAG ? req.body.new_module.INSERT_ALLOWED_FLAG : 'N'),
                UPDATE_ALLOWED_FLAG: (req.body.new_module.UPDATE_ALLOWED_FLAG ? req.body.new_module.UPDATE_ALLOWED_FLAG : 'N'),
                DELETE_ALLOWED_FLAG: (req.body.new_module.DELETE_ALLOWED_FLAG ? req.body.new_module.DELETE_ALLOWED_FLAG : 'N'),
                QUERY_ONLY: (req.body.new_module.QUERY_ONLY ? req.body.new_module.QUERY_ONLY : 'N')
            };
        }else{
            var new_module = null;
        }
        console.log(req.body);
        //They are saved in this order "id, role_data, active_module_name, active_module, new_module_name, new_module"
        role_model.save_edit(req.body.id, req.body.role_data, req.body.active_module_name, active_module, req.body.new_module_name, new_module).then(function(){
            console.log('Roles Saved');
      });

    },


    delete_user : function(req,res){
        var id = req.params.id;
        role_model.delete_user(id).then(function(){
            console.log('Delete was successful');
        });
    },


    search : function(req, res){
      var role = req.query.search;
      role_model.search(role).then(function(rows){
          res.render('roles/search_roles',{page_title:"Search Roles - Node.js",data:rows});
      });
    },


    applied_role_modules : function(req, res){
      var id = req.params.id;
      var module_name = req.body.module_name;
      role_model.ajax.applied_role_modules(id, module_name).then(function(modules){
          res.send({data:modules});
      });
    },


    new_role_modules : function(req, res){
      var id = req.params.id;
      role_model.ajax.new_role_modules(id).then(function(modules){
          res.send({data:modules});
      });
    },

    api : {
        list : function(req, res) {
            role_model.list().then(function (rows) {
                res.render('roles/roles', {page_title: "Roles - Node.js", data: rows});
            });
        }
    }

};

module.exports = roles_controller;
