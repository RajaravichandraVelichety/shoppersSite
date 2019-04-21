import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import { UserHomeComponent } from './user-home/user-home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { ProductsDisplayInfoComponent } from './products-display-info/products-display-info.component';
import { UserSidenavComponent } from './user-sidenav/user-sidenav.component';

import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'body-parser'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@blox/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialComponentsModule } from '../material-components/material-components.module'
import 'materialize-css';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { UserComponent } from './user/user.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { PaymentComponent } from './payment/payment.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { PaypalComponent } from './paypal/paypal.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { LoginComponent } from './login/login.component'
import { AuthGuardGuard } from './auth-guard.guard';

export const  userRouter: Routes=[
  {
    path:'',
    component:UserComponent,
    
    children:[
      {
        path:'',
        component:UserHomeComponent
      },
      {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'paypal',
        component:PaypalComponent
      },
      
      {
        path:'signup',
        component:UserSignupComponent
      },
      {
        path:'login',
        component:UserSigninComponent
      },
      {
        path:'cart',
        component:UserCartComponent,
      },
      
      {
        path:'search',
  
        children:[
          {
          path:':productname',
          component:ProductsearchComponent
          
        }
        ]
    },
      
      {
          path:':brand',
    
          children:[
          {
              path:'',
              component:ProductsDisplayComponent
          },
          {
            path:':productname',
            component:ProductsDisplayInfoComponent
            
          }
          ]
      },
      
    ]
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    
     HttpModule,
    FormsModule,
    MaterialModule,
    MaterialComponentsModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule,
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forChild(userRouter),
  ],
  exports:[
    UserHomeComponent, FooterComponent,  ProductsDisplayComponent, ProductsDisplayInfoComponent, UserSidenavComponent],
  declarations: [UserHomeComponent, FooterComponent, ProductsDisplayComponent, ProductsDisplayInfoComponent, UserSidenavComponent, UserComponent, SimilarProductsComponent, PaymentComponent, UserSignupComponent, UserSigninComponent, UserCartComponent, PaypalComponent, ProductsearchComponent, LoginComponent]
})
export class UserModule { }
