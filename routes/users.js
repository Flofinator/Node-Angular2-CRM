var express = require('express');
var router = express.Router();
var users = require('../controllers/modules/users');
//var auth = require('../controllers/middleware/auth_middleware');

router.get('/', users.list);//route add users, get n post
router.get('/add', users.add);
router.post('/add', users.save);
router.get('/search/:id', users.search);
router.get('/delete/:id', users.delete_user);
router.get('/edit/:id', users.edit);
router.post('/edit/:id', users.save_edit);

module.exports = router;