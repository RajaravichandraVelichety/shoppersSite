import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  constructor(private DataService: DataService) { }

    brands=[];
    searchitem:string;
  ngOnInit() {
     this.getCollections();
  }
  getCollections():void{
    
    this.DataService.getCollections().then(brands=>this.brands= brands);
    
    
  }
  

}
