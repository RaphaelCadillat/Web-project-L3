const express = require("express");
const router = express.Router();
const userController = require('../controller/dinoController.js')

router.get('/getNumberOfUser', userController.getNumberOfUser);
router.post('/detail', userController.postDetail);
router.delete('/detail/:id', userController.deleteDetail);
router.get('/detail/:id', userController.getUserDetail);
router.patch('/detail', userController.updateDetail);

module.exports = router;