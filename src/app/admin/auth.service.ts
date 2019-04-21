
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor( private http: Http,private router :Router) {
  }



login(credentials):Promise<any[]>{

        console.log(credentials);
         return this.http.post('http://localhost:3000/authenticate',credentials)
                .toPromise()
                .then(response => {
                    let result=response.json()
                    if(result && result.data){
                      localStorage.setItem('token',result.data)
                      return true

                    } else{

                      return false
                     }

      }).catch(this.handleError)
}

  logout() { 
    localStorage.removeItem('token');
    this.router.navigate(["admin/login"]);

  }

  isLoggedIn() { 
    return tokenNotExpired()
  }


private handleError (error: any) : Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message||error);
}
}

