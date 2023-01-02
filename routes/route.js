const express = require('express');
const router = express.Router();
const {sendMessage, sendImgMessage, sendVidMessage, sendDocMessage} = require('../controllers/controller');
router.route('/api/sendMessage').post(sendMessage);
router.route('/api/sendImgMessage').post(sendImgMessage);
router.route('/api/sendVidMessage').post(sendVidMessage);
router.route('/api/sendDocMessage').post(sendDocMessage);
module.exports=router;