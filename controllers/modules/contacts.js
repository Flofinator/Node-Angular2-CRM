
var contacts_model = require('../../models/contacts');


var contacts_controller = {

    list: function(req, res) {
        contacts_model.list().then(function (rows) {
            res.json({data: rows});
        });
    },


    add : function(req, res){
        res.render('contacts/add_contacts',{page_title:"Add Contacts -Node.js"})
    },

    save : function(req,res){
        var input = JSON.parse(JSON.stringify(req.body));
        var person_data = {
                FIRST_NAME  : input.first_name,
                LAST_NAME 	: input.last_name,
                MIDDLE_NAME : input.middle_name
            };
        var address_data = {
                LINE1  : input.address_line1,
                LINE2 	: input.address_line2,
                CITY : input.city,
                STATE_OR_PROVINCE : input.state,
                COUNTRY :   input.country,
                POSTAL_CODE : input.postal_code
            };
        contacts_model.save(person_data, address_data).then(function(){
            res.redirect('/contacts');
        });
    },

    edit : function(req, res){
        var id = req.params.id;
        contacts_model.edit(id).then(function(rows){
            res.json({data: rows})
        });

    },

    save_edit : function(req,res){
        var input = JSON.parse(JSON.stringify(req.body));
        var id = req.params.id;
        var address_id = input.address_id;
        var person_data = {
                FIRST_NAME  : input.first_name,
                LAST_NAME 	: input.last_name,
                MIDDLE_NAME : input.middle_name
            };
        var address_data = {
                LINE1  : input.address_line1,
                LINE2 	: input.address_line2,
                CITY : input.city,
                STATE_OR_PROVINCE : input.state,
                COUNTRY :   input.country,
                POSTAL_CODE : input.postal_code
            };
        contacts_model.save_edit(id, address_id, person_data, address_data).then(function(){
          res.redirect('/contacts');
      });

    },

    //TODO How are we deleting the client?  Active, inactive, deleted?
    delete : function(req,res){

    },

    //TODO Search Functionality
    search : function(req, res){

    }

};

module.exports = contacts_controller;