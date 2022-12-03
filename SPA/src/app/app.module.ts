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
import { PreloadAllModules, RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { apiServer } from './app-service';
import { AuthGuard } from './auth/guards/authGuard';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AppInterceptor } from './app-interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    CoachesComponent,
    OrderComponent,
    CoursesComponent,
    NotFoundComponent,
    
  ],

  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,AuthModule,
    RouterModule.forRoot(routes),
   
    
  ],
  providers: [apiServer, AuthGuard,AppInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }