var express = require('express');
var router = express.Router();
var user_roles = require('../controllers/modules/user_roles');
var authentication = require('../controllers/middleware/auth_middleware');

router.get('/', user_roles.list);//route add roles
router.get('/add', user_roles.add);
router.post('/add', user_roles.save);
router.get('/search/:id', user_roles.search);
router.get('/delete/:userid/:roleid', user_roles.delete_user);
router.get('/reactivate/:userid/:roleid', user_roles.reactivate);

module.exports = router;