import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidLogin: boolean; 
  

  emailInput;
  
  passwordInput;
  

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  signIn() {
    var credentials = {'email':this.emailInput,'password':this.passwordInput}
    console.log(credentials);
    this.authService.login(credentials)
      .then(result => { 
        if (result)
          this.router.navigate(['admin']);
        else {
       
          this.invalidLogin = true;
        }
      });
  }
}

