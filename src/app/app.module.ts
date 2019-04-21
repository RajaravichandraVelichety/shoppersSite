
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AdminModule } from "src/app/admin/admin.module";
import { UserModule } from "src/app/user/user.module";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'body-parser'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { DataService } from './data.service';
import { RoutingModule } from './routing/routing.module'
import { MaterialModule } from '@blox/material';
import { MaterialComponentsModule } from './material-components/material-components.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'materialize-css';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap'


const mainRouter: Routes=[
  
  {
    path: '',
    loadChildren:'./user#UserModule'
  },
  {
    path: 'admin',
    loadChildren:'./admin#AdminModule',
    
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
 CommonModule,
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RoutingModule,
    MaterialModule,
    MaterialComponentsModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule,
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forRoot(mainRouter)


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
