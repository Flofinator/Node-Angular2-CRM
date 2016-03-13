var dbconn = require('../../libs/database/database_connection');
//var Promise = require('bluebird');
var jwt = require('jsonwebtoken');



function createToken(user) {
  return jwt.sign(user, "SUPER-SECRET", { expiresIn: 60*5 });//eventually put the secret into a config file and call it from there.
}

var web_token_maker = {


    login: function(req, res){
        res.render('login/login.jade');
    },


    authenticate : function(req,res) {

        var input = JSON.parse(JSON.stringify(req.body));

        var USERNAME = input.username;
        var PASSWORD = input.password;

        dbconn.query("SELECT ID, USERNAME, ACTIVE_FLAG, PASSWORD FROM USERS WHERE USERNAME like ? and PASSWORD like ?", [USERNAME, PASSWORD], function (err, rows) {

            var USER = {};

            if (err)
                console.log("Error inserting : %s ", err);

            if (rows[0]) {
                USER.ID = rows[0].ID;
                USER.USERNAME = rows[0].USERNAME;
                res.status(201).send({
                    json_token: createToken(USER)
                });
            } else {
                res.status(401).send("The username or password didn't match");
            }

        });
    }
};

module.exports = web_token_maker;