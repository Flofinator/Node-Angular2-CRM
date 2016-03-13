var express = require('express');
var router = express.Router();
var roles = require('../controllers/modules/roles');

router.get('/', roles.list);//route add roles
router.get('/add', roles.add);
router.post('/add', roles.save);
router.get('/search/:id', roles.search);
router.get('/delete/:id', roles.delete_user);
router.get('/edit/:id', roles.edit);
router.post('/edit/:id', roles.save_edit);
router.post('/applied_role_modules/:id', roles.applied_role_modules);
router.post('/new_role_modules/:id', roles.new_role_modules);

module.exports = router;