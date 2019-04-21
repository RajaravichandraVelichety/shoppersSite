import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.scss']
})
export class ProductsearchComponent implements OnInit {
  productName;
  product;

  constructor(private DataService: DataService,private router: Router,route:ActivatedRoute) { 
    
    
    route.params.subscribe(params =>{


            this.productName = params['productname'];
            
     });
     


   this.getProduct(this.productName);
     this.router.routeReuseStrategy.shouldReuseRoute= function(){
       return false;
     };
}

  ngOnInit() {
  }

  
  getProduct(query):void{
   
    var productname :string= query;
     
    this.DataService.searchProduct(productname).then(product => this.product= product);
   }

}
