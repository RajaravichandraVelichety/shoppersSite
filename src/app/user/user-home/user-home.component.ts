
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/data.service'
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  
  brandproducts =[];
  products =[];

    type = 'default';
    prominent = false;
    dense = false;

    private _box = false;
    private _outlined = true;
    disabled = false;
    required = false;
    persistent = false;
    
    searchitem: string;

    opened: boolean;
    
  constructor(private DataService: DataService){}

  ngOnInit(){
    this.getProducts();
    
  }

  getProducts():void{
    var brander :string= "TopSelling";
   
    
   this.DataService.getbrandProducts(brander).then(brandproducts => this.brandproducts= brandproducts);
        
  }

  get outlined() {
        return this._outlined;
    }

    

}
