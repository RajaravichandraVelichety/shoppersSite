import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  constructor(private DataService: DataService) { }

  cname:string;
  cemail:string;
  cphone:string;
  cpassword:string;
  cimage:File;
  users=[];

  ngOnInit() {
  }

  files:any;
  selectFile($event) {
    console.log($event.target.files)
    this.files = $event.target.files || $event.srcElement.files;
    
  }

  signup(){
    const user = new FormData();
    user.append('name',this.cname);
    user.append('email',this.cemail);
    user.append('phonenumber',this.cphone);
    user.append('password',this.cpassword);
    user.append('image',this.files[0], this.files[0]['name']);

    console.log(user);

    this.DataService.signup(user).then(response=>{this.users.push(response);});
  }
}
