const express = require('express')
const router = express.Router()
const restController = require('../controllers/restaurant-controller')

//! 匹配條件多的路由寫在前面，讓程式先判斷。
router.get('/restaurants', restController.getRestaurants)
router.use('/', (req, res) => res.redirect('/restaurants'))

module.exports = router
