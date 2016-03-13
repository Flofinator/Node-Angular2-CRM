var dbconn = require('../../libs/database/database_connection');
var jwt = require('jsonwebtoken');



basic_authentication = {

    middle_auth: function(req, res, next) {

            var jwt_token = req.headers;
            /*console.log(jwt_token.authorization);
            var decode_token = jwt.decode(jwt_token.authorization);
            console.log(decode_token);
            console.log(decode_token.ID);
            console.log(decode_token.USERNAME);*/
            jwt.verify(jwt_token.authorization, 'SUPER-SECRET', function(err, decoded){
                if(err) {
                    res.json({error: 'Must have a webtoken to log in'});
                } else{
                    //console.log(decoded);
                    return next();
                }
            });
            /*dbconn.query("SELECT ID, USERNAME, ACTIVE_FLAG, PASSWORD FROM USERS WHERE USERNAME like ? and PASSWORD like ?", [req.body.jwt.id], function (err, rows) {

                if (err)
                    console.log("Error inserting : %s ", err);

                if (rows[0]) {
                    console.log(req.session);
                    return next();
                } else {
                    res.render('.../views/utility_views/not_authorized.jade');
                }
            });
        });*/
    }
};


module.exports = basic_authentication;