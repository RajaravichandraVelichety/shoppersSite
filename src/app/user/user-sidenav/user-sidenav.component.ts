import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.scss']
})
export class UserSidenavComponent implements OnInit {

    categories=[];
    searchitem:string;

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.getCollections();
  }

  getCollections():void{
    
    this.DataService.getCollections().then(categories=>this.categories= categories);
    
    
  }

  searchProducts(){
    search=>this.searchitem;
  }

}
