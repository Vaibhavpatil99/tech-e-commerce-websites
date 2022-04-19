const express = require('express');
const router = express.Router();

const dataModel = require('../models/dataModel');
const cart = require('../models/cart');


router.get('/',(res,req) => {
    req.send('we are on home');
});

router.get('/mobiles',(res,req) => {
    req.send('all mobile phones');
});

router.post('/', async (req,res) =>{
    
    const post =new dataModel({
        Dname:req.body.Dname,
        spec:req.body.spec,
        price:req.body.price,
        img:req.body.img,
        category:req.body.category,
    });
    try{
        const savePost = await post.save();
        res.json(savePost);
    }catch(err) {
        console.log(err)
        res.json({message: err })
    }
});
router.post('/addtocart',async(req,res)=>{
    const item =new cart({
        Dname:req.body.Dname,
        spec:req.body.spec,
        price:req.body.price,
        img:req.body.img,
        category:req.body.category,
        quantity:req.body.quantity
    });
    try{
        const saveItem = await item.save();
        res.status(200).json(saveItem);
    }catch(err) {
        res.status(400).json({message: err })
    }
})
router.put('/updatequanntity/:id',async(req,res)=>{
    const {id: _id} = req.params
      cart.updateOne({ _id:_id}, { quantity:req.body.quantity }, function(
        err,
        result
      ) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      });
    
})

router.delete('/deleteItem/:id',async(req,res)=>{
    try{
        const removeItem = await cart.remove({_id:req.params.id})
        res.json(removeItem);

    }catch(err){
        res.json({message:err})
    }

})

router.get('/getcartitems',async(req,res)=>{
    try {
        const items = await cart.find();
        res.status(200).json(items);
    }
    catch (err) {
        res.status(400).json({message: err })
    }
})
router.get('/data', async (req, res) => {
 
    try {
        const posts = await dataModel.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err })
    }
});







module.exports = router;