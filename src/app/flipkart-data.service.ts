import { Injectable } from '@angular/core';

import { Http } from '@angular/http'
import 'rxjs';
import {  HttpClient,HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FlipkartDataService {

  constructor(private http: Http) { }

   getProductDetails(flipCode):Promise<any[]>{
         return this.http.get('http://localhost:3000/flipkart/add/'+flipCode)
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
    }
 
    private handleError (error: any) : Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message||error);
}
}
