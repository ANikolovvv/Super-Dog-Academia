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
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    CoachesComponent,
    OrderComponent,
    CoursesComponent,
    LogoutComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }