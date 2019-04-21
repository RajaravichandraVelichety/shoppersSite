var flipkart = require('flipkart-affiliate-client');
var express = require('express');
 var router = express.Router();

 let response = {
     status : 200,
     message : null,
     data : null
 }

var fk = flipkart.createClient({
  FkAffId: 'gpk3044gm', 
  FkAffToken: 'f6990f9179f94b28a1d6485c32667042',
  responseType: 'json'
});

router.get('/add/:flipCode',(req,res)=>{
    var fkid= req.params.flipCode;
    console.log(fkid)
fk.idSearch({
  id:"MOBDPPZZPXVDJHSQ"
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

});


 module.exports = router;