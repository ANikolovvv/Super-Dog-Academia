import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CoachesComponent } from './coaches/coaches.component';


import { OrderComponent } from './order/order.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { apiServer } from './app-service';
import {  AuthGuard } from './auth/guards/authGuard';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    CoachesComponent,
    OrderComponent,
    CoursesComponent,
    
   

  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AuthModule,
    FormsModule
   

  ],
  providers: [apiServer,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }