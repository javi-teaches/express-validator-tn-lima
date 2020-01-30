// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const controller = require('../controllers/mainController');

// ************ Middlewares ************
const registerValidations = require('../middlewares/registerValidatorMiddleware');
const upload = require('../middlewares/uploadMiddleware');

router.get('/', controller.index);

router.get('/register', controller.register);

router.post('/register', upload.single('avatar'), registerValidations, controller.store);

module.exports = router;
