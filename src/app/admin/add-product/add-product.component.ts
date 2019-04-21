import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/data.service'
import { HttpClient } from '@angular/common/http'
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {




  pItemName:string;
  pItemBrand:string;
  pItemPrice:string;
  pItemASIN:string;
  pItemFLIP:string;
  pItemImage:File;
  pItemDescription:string;
  pItemCategory:string;
  pItemSubCategory:string;

  
  

  title = 'app';

  products =[];  

  
  
  

  constructor(private DataService: DataService,public snackBar: MatSnackBar) { }

  
  openSnackBar() {
    this.snackBar.open('Data stored succesfully');
  }

  ngOnInit() {
  }

  files:any;
  selectFile($event) {
    console.log($event.target.files)
    this.files = $event.target.files || $event.srcElement.files;
    
  }

  intoitem(){
    const product = new FormData();
    product.append('category',this.pItemCategory);
    product.append('subcategory',this.pItemSubCategory);
   product.append('brand',this.pItemBrand);
     product.append('name',this.pItemName);
     product.append('price',this.pItemPrice);
     product.append('image',this.files[0], this.files[0]['name']);
     product.append('description',this.pItemDescription);
     
   this.DataService.insertItem(product).then(response=>{this.products.push(response);}); 
   
   this.pItemCategory="";
   this.pItemSubCategory="";
   this.pItemBrand="";
   this.pItemName="";
   this.pItemPrice="";
   this.pItemDescription="";
  }

 


}

