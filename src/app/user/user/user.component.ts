import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";
import {Router} from '@angular/router';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private DataService: DataService,private router: Router) { }

    brands=[];
    categories=[];
    searchitem:string;
    search:string;

  ngOnInit() {
       this.getCollections();
  }
  getCollections():void{
    
    this.DataService.getCollections().then(categories=>this.categories= categories);
    
    
  }


  navigateToCart() {
    this.router.navigateByUrl('/cart');
 }

}
