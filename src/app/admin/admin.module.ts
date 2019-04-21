import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';

import { MaterialComponentsModule } from '../material-components/material-components.module'
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'body-parser'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@blox/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'materialize-css';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { AddProductFlipkartComponent } from './add-product-flipkart/add-product-flipkart.component';
import { LoginComponent } from './login/login.component'
import { AuthGuardGuard } from "src/app/admin/auth-guard.guard";
import { AuthService } from "src/app/admin/auth.service";
import { AdminComponent } from './admin/admin.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';


export const adminRouter: Routes=[
  {
    path:'admin',
     component: AdminHomeComponent,
      
  
    children:[
      {
        path:'',
        component: AdminComponent,
        canActivate: [AuthGuardGuard] 
        
        
      },
      {
        path:'addproduct',
        component:AddProductComponent,
        canActivate: [AuthGuardGuard] 
        
      },
      {
        path:'deleteproduct/:brand',
        component:DeleteProductComponent,
        canActivate: [AuthGuardGuard] 
        

      },
      {
        path:'flipkartadd',
        component:AddProductFlipkartComponent,
        canActivate: [AuthGuardGuard] 
        

      },
         {
    path:'login',
    component:LoginComponent
  }
    ] 
  },
   
  
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
    RouterModule.forChild(adminRouter),
  ],
  exports:[
    AddProductComponent, DeleteProductComponent, AdminHomeComponent, AdminSidenavComponent
  ],
  providers:[AuthService,AuthGuardGuard],
  declarations: [AddProductComponent, DeleteProductComponent, AdminHomeComponent, AdminSidenavComponent,AddProductFlipkartComponent, LoginComponent, AdminComponent, AdminSigninComponent, AdminSignupComponent]
})
export class AdminModule { }
