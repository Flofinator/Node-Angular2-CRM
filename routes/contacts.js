var express = require('express');
var router = express.Router();
var contacts = require('../controllers/modules/contacts');

router.get('/', contacts.list);//route add roles
router.get('/add', contacts.add);
router.post('/add', contacts.save);
router.get('/edit/:id', contacts.edit);
router.post('/edit/:id', contacts.save_edit);
/*
router.get('/delete/:id', contacts.delete_user);
router.get('/search/:id', contacts.search);
*/

module.exports = router;