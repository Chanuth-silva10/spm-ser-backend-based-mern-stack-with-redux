const router = require('express').Router()
const{
    createpromo,
    findallpromo,
    updatepromo,
    deletepromo
} = require('../controller/PromotionController')


router.route('/promotion').get(findallpromo)
router.route('/promotion').post(createpromo)
router.route('/promotion/:id').put(updatepromo)
router.route('/promotion/:id').delete(deletepromo)

module.exports = router