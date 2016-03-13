var jwt = require('jsonwebtoken');

exports.login = function(req, res) {
    res.render('login/login.jade');
}; 


exports.authenticate = function(req, res) {
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            USERNAME    : input.username,
            PASSWORD 	: input.password 
        
        };
        
        var query = connection.query("SELECT ID, USERNAME, ACTIVE_FLAG, PASSWORD FROM USERS WHERE USERNAME like ? and PASSWORD like ?",[data.USERNAME,data.PASSWORD], function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
         if(rows[0]){
          	req.session.ID = rows[0].ID
          	req.session.USERNAME = rows[0].USERNAME
          	req.session.PASSWORD = rows[0].PASSWORD
          	console.log(req.session)
            res.redirect('/');
         }else{
          res.render('utility_views/notauthorized.jade');
        }
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.logout = function(req, res){
    var sess = req.session;

    sess.destroy(function(err){
        if(err){
            console.log("Error destroying session: %s", err);
        }else{
            console.log("Session successfully destroyed");
        }
        res.redirect('/');
    });

};
