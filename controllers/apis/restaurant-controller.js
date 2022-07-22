const restaurantServices = require('../../services/restaurant-services')
const { Restaurant, Category, User, Comment } = require('../../models')

const restaurantController = {
  getRestaurants: (req, res, next) => {
    restaurantServices.getRestaurants(req, (err, data) => err
      ? next(err)
      : res.json({
        status: 'success',
        message: '成功拿到所有餐廳資料',
        data
      }))
  },
  getRestaurant: (req, res, next) => {
    restaurantServices.getRestaurant(req, (err, data) => err
      ? next(err)
      : res.json({
        status: 'success',
        message: '成功拿到餐廳資料',
        data
      }))
  }
}

module.exports = restaurantController
