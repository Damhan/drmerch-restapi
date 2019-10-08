const express = require('express');
const router = express.Router();

//Handle get requests on /orders
router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling get requests on /orders'
    })
});

//Handle post requests on /orders
router.post('/', (req,res,next) => {
    res.status(201).json({
        message:'Handling post requests on /orders'
    })
});

router.get('/:orderId/', (req,res,next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message:'Here is order: ' + id
    })
})

router.post('/:orderId/', (req,res,next) => {
    const id = req.params.orderId;
    res.status(201).json({
        message:'Created order id: ' + id
    })
})

router.delete('/:orderId/', (req,res,next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Deleted order id: ' + id
    })
})

module.exports = router;