import { Component, OnInit } from '@angular/core';
import { FlipkartDataService  } from 'src/app/flipkart-data.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/data.service'

@Component({
  selector: 'app-add-product-flipkart',
  templateUrl: './add-product-flipkart.component.html',
  styleUrls: ['./add-product-flipkart.component.scss']
})
export class AddProductFlipkartComponent implements OnInit {

  constructor(private FlipkartDataService:FlipkartDataService, public snackBar: MatSnackBar,private DataService:DataService) { }

  ngOnInit() {
  }


  flipId:string;
  fkid:string;
  product=[];
  flipproduct=[];

  intoitem(){
this.FlipkartDataService.getProductDetails(this.flipId).then(product => this.product= product);
}
  openSnackBar() {
    this.snackBar.open('Data stored succesfully');
  }

}
