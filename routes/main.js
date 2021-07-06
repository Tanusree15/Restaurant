const express=require("express");
const router=express.Router();
const controllers= require('../controllers')

router.get("/",async(req,res,next)=>{
  const data=req.context
  const itemCtr= controllers.item.instance()

    data.soup= await itemCtr.get({category:'Soup'})
    data.appetizer= await itemCtr.get({category:'Appetizers'})
    data.platter= await itemCtr.get({category:'Platters'})
    data.gravy= await itemCtr.get({category:'Gravy'})
    data.dessert= await itemCtr.get({category:'Desserts'})
    data.drink= await itemCtr.get({category:'Drinks'})

    res.render("home",data);

});

router.get("/menu",async(req,res,next)=>{
  const data=req.context
  const itemCtr= controllers.item.instance()

    data.soup= await itemCtr.get({category:'Soup'})
    data.appetizer= await itemCtr.get({category:'Appetizers'})
    data.platter= await itemCtr.get({category:'Platters'})
    data.gravy= await itemCtr.get({category:'Gravy'})
    data.dessert= await itemCtr.get({category:'Desserts'})
    data.drink= await itemCtr.get({category:'Drinks'})

    res.render("menu",data);

});

router.get("/blog",(req,res,next)=>{
  const data=req.context
  res.render("blog",data);
});

router.get("/menu",(req,res,next)=>{
  const data=req.context
  res.render("menu",data);
});

router.get("/about",(req,res,next)=>{
  const data=req.context
  res.render("about",data);
});

router.get("/deliver",(req,res,next)=>{
  const data=req.context
  res.render("deliver",data);
});


router.get("/items",async(req,res,next)=>{
  const filters= req.query
  const itemCtr= controllers.item.instance()
  const items= await itemCtr.get({filters})

  res.json({
    items
  })
});

router.post('/order', async(req,res,next)=>{
  const orderData=req.body
  // res.json(orderData)

  const orderCtr=controllers.order.instance()
  const order=await orderCtr.post(orderData)

  res.json(order)
})

module.exports=router;
