const express = require("express");
const router = express.Router();
const DinoController = require('../controller/dinoController.js')

router.get('/getNumberOfUser', DinoController.getNumberOfDino);
router.post('/detail', DinoController.postDetail);
router.delete('/detail/:id', DinoController.deleteDetail);
router.get('/detail/:id', DinoController.getDinoDetail);
router.patch('/detail', DinoController.updateDetail);
router.get('/connection',DinoController.connectUser);
router.get('/createuser',DinoController.createUser);
module.exports = router;