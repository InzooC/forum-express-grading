const restaurantServices = require('../../services/restaurant-services')

const restaurantController = {
  getRestaurants: (req, res, next) => {
    restaurantServices.getRestaurants(req, (err, data) => err
      ? next(err)
      : res.json({
        status: 'success',
        message: '成功拿到餐廳資料',
        data
      }))
  }
}
module.exports = restaurantController
