import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private DataService: DataService,private router: Router,route:ActivatedRoute) { }
  products=[];
  ngOnInit() {
    this.getCartItems();
  }
  getCartItems():void{
    
    this.DataService.getCartItems().then(products=>this.products=products);
    console.log(this.products);  
    for(let product of this.products){
      console.log(product.price);
    }
  }


  deleteproduct(id){
    var productid=id;
    console.log(productid);
    this.DataService.deletecartproduct(productid).then(response=>response=response);
    window.location.reload();

  }

  
}
