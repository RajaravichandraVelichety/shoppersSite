
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';


@Injectable()
export class AuthGuardGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(){
    if(this.auth.isLoggedIn()) return true;

    this.router.navigateByUrl('/login');
    return false;
  }  
}