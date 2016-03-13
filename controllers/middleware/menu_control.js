

exports.role_menu_auth = function(req, res){

	 req.getConnection(function(err,connection){
       
     connection.query("SELECT DISTINCT MODULE_NAME from ROLE_MODULES where ROLE_ID in (SELECT ROLE_ID from ROLE_USERS WHERE USER_ID = ?)",[req.session.ID],function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );

         res.render('index', {data: rows});


                           
         });
       
    });

}; 