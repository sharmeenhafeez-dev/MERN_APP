const app = require('express')

const router = app.Router()

const {checkout} = require ('./controller')


router.post('/checkout', checkout)

module.exports = router