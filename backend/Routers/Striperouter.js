const express = require("express");
const router = express.Router();
const {paymentIntent}=require('../Controller/StripController')


router.post('/create-payment-intent',paymentIntent)





module.exports= router 