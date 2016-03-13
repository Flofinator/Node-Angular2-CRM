
var user_model = require('../../models/users');

var user_controller = {

    list : function(req, res){
        user_model.list().then(function(rows){
            res.json({data:rows});
        });
    },

    add : function(req, res){
        res.render('users/add_user',{page_title:"Add Users-Node.js"});
    },

    edit : function(req, res){
        var id = req.params.id;
        user_model.edit(id).then(function(rows){
            res.json({data:rows});
        });
    },

    save : function(req,res){
        user_model.save(req.body).then(function(){
            console.log('User Saved');
        })
    },

    save_edit : function(req,res){
        /*var input = JSON.parse(JSON.stringify(req.body));
        var id = req.params.id;
        var data = {
                ACTIVE_FLAG  : input.active_flag,
                USERNAME    : input.username,
                PASSWORD 	: input.password
            };*/
        var id = req.params.id;
        user_model.save_edit(id, req.body).then(function(){
            console.log('Edit Saved');
        })
    },

    delete_user : function(req,res){
        var id = req.params.id;
        user_model.delete_user(id).then(function(){
            console.log('User Deleted');
        });
    },

    search : function(req, res){
        var username = req.query.search;
        user_model.search(username).then(function(rows){
            res.render('users/search_user',{page_title:"Search Users - Node.js",data:rows});
        });
    }

};

module.exports = user_controller;
