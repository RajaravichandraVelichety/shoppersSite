var MongoClient = require('mongodb').MongoClient;
var express = require('express');
 var router = express.Router();
var url = "mongodb://localhost:27017/";
var multer=require('multer');

 
var upload = multer({ dest: 'dist/uploads/'});

let response = {
     status : 200,
     message : null,
     data : null
 }

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

  router.post('/authenticate',(req,res)=>{

    if("rryecomm@gmail.com"==req.body.email&&"rry12345"==req.body.password){
      response.data=token;
      res.json(response);
    }
  

});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var  dbo = db.db("ShopperSite");

  

  router.get('/retrieve',(req,res)=>{
    
  dbo.collection("Apple").find({}).toArray(function(err, laptops) {
    if (err) throw err;
    response.data = laptops;
    
    res.json(response);
  });
});


  router.get('/productInfo/:productbrand/:productname',(req,res)=>{
  
    var query={name:req.params.productname};
    console.log(query);
    var brand=req.params.productbrand;
    console.log(brand);
    dbo.collection(brand).find(query).toArray(function(err, laptops) {
    if (err) throw err;
    response.data = laptops;
    res.json(response);
    
      });

     
});


router.get('/search/:productname',(req,res)=>{
  
  var query={name:req.params.productname};
  var collectionslist=[];

    
    dbo.collection("Books").find(query).toArray(function(err, laptops) {
    if (err) throw err;
    response.data = laptops;
    res.json(response);
    
      });

});


router.get('/signin/:username/:password',(req,res)=>{
  
  var email={email:req.params.username};
  console.log(email);
  dbo.collection("Customers").find(email).toArray(function(err, users) {
  if (err) throw err;
  response.data = users;
  console.log(response.data);
  res.json(response);
    });  
});

  
  router.get('/brandproducts/:item',(req,res)=>{
  
    var name =req.params.item;
  dbo.collection(name).find({}).toArray(function(err, laptops) {
    if (err) throw err;
    response.data = laptops;
    
    res.json(response);
  });
});

  router.get('/collections',(req,res)=>{
    
  dbo.listCollections().toArray((function(err, categories) {
    if (err) throw err;
    response.data = categories;
    res.json(response);
  }));
});


  router.post('/insert',upload.single('image'),(req,res)=>{
  
  var myobj = { 
                category:req.body.category,
                subcategory:req.body.subcategory,
                brand:req.body.brand,
                name:req.body.name,
                price:req.body.price,
                image: req.file.filename,
                description:req.body.description,
              };
              
              console.log(req.body.category);

    
  dbo.collection(myobj.category).insertOne(myobj, function(err, res) {
    if (err) throw err;
    
    
  });
});

  router.post('/signup',upload.single('image'),(req,res)=>{
  
    var customer = { 
                  name:req.body.name,
                  email:req.body.email,
                  phone:req.body.phonenumber,
                  password:req.body.password,
                  image: req.file.filename,
                };
    console.log(req.body.phonenumber);
  
      
    dbo.collection("Customers").insertOne(customer, function(err, res) {
      if (err) throw err;
      
      
    });

  });

  router.get('/addToCart/:productcode/:productname/:productimage/:productprice',(req,res)=>{
  var item={productcode:req.params.productcode,
            productname:req.params.productname,
            productimage:req.params.productimage,
            productprice:req.params.productprice,
            };
    
    console.log(item);
  
      
    dbo.collection("itemsInCart").insertOne(item, function(err, res) {
      if (err) throw err;
       
    });
  });
  

  router.get('/cartItems',(req,res)=>{

    dbo.collection("itemsInCart").find({}).toArray(function(err, result) {
      if (err) throw err;
      response.data = result;
      console.log(response.data);
      res.json(response);
    });
  });

  router.get('/deleteproduct/:productid/:brand',(req,res)=>{

    
    dbo.collection(req.params.brand).deleteOne({"name":req.params.productid}, function(err, obj) {
        if (err) throw err;
        
    response.message="1 document deleted";
    res.send(response);
        
  });
  });

  
  router.get('/deletecartproduct/:productid',(req,res)=>{

    console.log(req.params.productid);
    dbo.collection("itemsInCart").deleteOne({"productname":req.params.productid}, function(err, obj) {
        if (err) throw err;
        
        console.log("one item deleted");
        response.message="1 document deleted";
         res.send(response);
        
  });
  });

});

module.exports = router;