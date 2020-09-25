/*
 */
const router = require('express').Router();
//Otra forma de de código
// const {Router}= require ('express)
//const router = express.Router()


router.use(require('./login'))
router.use(require('./usuario'))
router.use(require('./categoria'))
router.use(require('./producto'))



module.exports = router