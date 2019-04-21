import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/data.service'
import { Router, ActivatedRoute } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products-display-info',
  templateUrl: './products-display-info.component.html',
  styleUrls: ['./products-display-info.component.scss']
})
export class ProductsDisplayInfoComponent implements OnInit {

  message;
  productName;
  productBrand;
  product;
  brandnamer;
  
  products =[];  
  constructor(private DataService: DataService,private router: Router,route:ActivatedRoute) { 
    //this.DataService.currentMessage.subscribe(brandnamer => this.brandnamer = brandnamer);
    
         route.params.subscribe(params =>{


                 this.productName = params['productname'];
                 
          });
          

         route.parent.params.subscribe(params =>{


                 this.productBrand = params['brand'];
                 console.log(this.productBrand);
          });

        this.getProduct(this.productName,this.productBrand);
          this.router.routeReuseStrategy.shouldReuseRoute= function(){
            return false;
          };
  }

  ngOnInit() {
  }




  getProduct(message,brand):void{
   
   var productname :string= message;
   var productbrand:string= brand;
    
   this.DataService.getProduct(productname,productbrand).then(product => this.product= product);
  }

  addToCart(productid,name,image,price):void{
    console.log(productid);
    this.DataService.addToCart(productid,name,image,price).then(response=>{this.products.push(response);});  
  }

}
