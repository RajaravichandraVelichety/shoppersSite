var amazon = require('amazon-product-api');
var express = require('express');
 var router = express.Router();



let response = {
     status : 200,
     message : null,
     data : null
 }
 
var client = amazon.createClient({
  awsId: "AKIAJ5R2BEUKRYAJ5V3A",
  awsSecret: "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",
  awsTag: "offersglobe-21"
  
});


    router.get('/add/:asinCode',(req,res)=>{
          var id= req.params.asinCode;
              client.itemLookup({
                idType: 'ASIN',
                itemId:id,
                responseGroup: 'ItemAttributes,OfferFull',
                domain: 'webservices.amazon.in'
              }, function(err, results) {
                if (err) {
                  console.log(req.params.asinCode);
                  console.log(err);
                
                } else {
                   
                  console.log(results);
                  response.data=results;
                  res.json(response);
                  
                  
                  
                }
              });

    
    });


module.exports = router;