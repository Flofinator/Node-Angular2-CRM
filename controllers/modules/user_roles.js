
var user_roles_model = require('../../models/user_roles');


var user_roles = {

    list : function(req, res) {
        user_roles_model.list().then(function (rows) {
            res.json({data:rows});
        });
    },

    add : function(req, res){
        user_roles_model.add().then(function(rows){
            res.json({data:rows});
        });
    },

    save : function(req,res){
            user_roles_model.save(req.body).then(function(){
                console.log('User_Roles Saved!');
            });
    },

    delete_user : function(req,res){
        var user_id = req.params.userid;
        var role_id = req.params.roleid;
        user_roles_model.delete_user(user_id, role_id).then(function(){
            console.log('User Role Deleted');
        });
    },

   reactivate : function(req, res){
       var user_id = req.params.userid;
       var role_id = req.params.roleid;
       user_roles_model.reactivate(user_id, role_id).then(function(){
           console.log('User Role Reactivated');
        });
    },

    //TODO Needs to be fixed
    search : function(req, res){
        var username = req.query.search;
        user_roles_model.search(username).then(function(rows){
            res.render('user_roles/search_user_roles',{page_title:"Search User Roles - Node.js",data:rows});
        });
    }


};


module.exports = user_roles;
