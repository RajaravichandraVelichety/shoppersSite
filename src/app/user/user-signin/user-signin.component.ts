import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

  constructor(private DataService: DataService,private router: Router,route:ActivatedRoute) { }
  cemail:string;
  cpassword:string;
  users=[];
  user;

  ngOnInit() {
  }

  checklogin(){
    var email= this.cemail;
    var password= this.cpassword;
    console.log(email);
    this.DataService.signin(email,password).then(user => this.user= user);
  }

}
