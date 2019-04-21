import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs';

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService{

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  
constructor(private http: Http){}

changeMessage(brandnamer: string) {
    this.messageSource.next(brandnamer);
  }


getProducts(): Promise<any[]>{
    return this.http.get('http://localhost:3000/retrieve/')
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
}

getProduct(productname:string,productbrand:string): Promise<any[]>{
    

    return this.http.get('http://localhost:3000/productInfo/'+productbrand+'/'+productname)
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
}


searchProduct(productname:string): Promise<any[]>{
    

  return this.http.get('http://localhost:3000/search/'+productname)
              .toPromise()
              .then(response=> response.json().data)
              .catch(this.handleError)
}
getbrandProducts(item:string): Promise<any[]>{
    return this.http.get('http://localhost:3000/brandproducts/'+item)
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
}

getCollections(): Promise<any[]>{
    return this.http.get('http://localhost:3000/collections/')
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
}

getCategories(): Promise<any[]>{
  return this.http.get('http://localhost:3000/categories/')
              .toPromise()
              .then(response=> response.json().data)
              .catch(this.handleError)
}

sendData(name:string){
     this.messageSource.next(name);

}


insertItem(item :FormData):Promise<any[]>{

        
         return this.http.post('http://localhost:3000/insert/',item)
                .toPromise()
                .then(response => response)
                .catch(this.handleError)
}

signin(username:string,password:string):Promise<any[]>{
  
  return this.http.get('http://localhost:3000/signin/'+username+'/'+password)
             .toPromise()
             .then(response=> response.json().data)
             .catch(this.handleError)
}

signup(user :FormData):Promise<any[]>{

        
  return this.http.post('http://localhost:3000/signup/',user)
         .toPromise()
         .then(response => response)
         .catch(this.handleError)
}

addToCart(id :string,name:string,image:string,price:string):Promise<any[]>{

        
  return this.http.get('http://localhost:3000/addToCart/'+id+'/'+name+'/'+image+'/'+price)
         .toPromise()
         .then(response => response)
         .catch(this.handleError)
}

getCartItems():Promise<any[]>{
         
  return this.http.get('http://localhost:3000/cartItems/')
         .toPromise()
         .then(response => response.json().data)
         .catch(this.handleError)

}


deleteproduct(productid:string,brand:string):Promise<any[]>{
  
     return this.http.get('http://localhost:3000/deleteproduct/'+productid+'/'+brand)
                .toPromise()
                .then(response=> response.json().data)
                .catch(this.handleError)
}

deletecartproduct(productid:string):Promise<any[]>{
  
  return this.http.get('http://localhost:3000/deletecartproduct/'+productid)
             .toPromise()
             .then(response=> response.json().data)
             .catch(this.handleError)
}

private handleError (error: any) : Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message||error);
}

}