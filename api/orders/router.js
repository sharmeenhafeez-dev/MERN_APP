const app = require('express')

const router = app.Router()

const {sandMail,addOrder,allorders,orderbyId ,updateOrderStatusAndMessage} = require ('./controller')


router.post('/sand-mail', sandMail)
router.post('/create-order', addOrder)

router.get('/allorders', allorders)
router.get('/orderbyid/:_id', orderbyId)
router.put('/update-order/:_id', updateOrderStatusAndMessage);


module.exports = router