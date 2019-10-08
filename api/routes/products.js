const express = require('express');
const router = express.Router();

//Handle get requests on /products
router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling get requests on /products'
    })
});

//Handle post requests on /products
router.post('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling post requests on /products'
    })
});

router.get('/:prodId/', (req,res,next) => {
    const id = req.params.prodId;
    res.status(200).json({
        message:'Here is product: ' + id
    })
})

router.post('/:prodId/', (req,res,next) => {
    const id = req.params.prodId;
    res.status(200).json({
        message:'Created product id: ' + id
    })
})

router.patch('/:prodId/', (req,res,next) => {
    const id = req.params.prodId;
    res.status(200).json({
        message: 'Updated product id: ' + id
    })
})

router.delete('/:prodId/', (req,res,next) => {
    const id = req.params.prodId;
    res.status(200).json({
        message: 'Deleted product id: ' + id
    })
})

module.exports = router;