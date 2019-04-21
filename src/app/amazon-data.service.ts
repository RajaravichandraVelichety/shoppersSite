import { Injectable } from '@angular/core';

import { Http } from '@angular/http'
import 'rxjs';
import {  HttpClient,HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AmazonDataService {

  constructor(private http: Http) { }

  getProductDetails(asinCode):Promise<any[]>{
         return this.http.get('http://localhost:3000/amazon/add/'+asinCode)
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
    }
 
    private handleError (error: any) : Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message||error);
}
}
