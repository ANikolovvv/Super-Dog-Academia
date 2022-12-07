import { NgModule, isDevMode } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

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
import { AuthGuard } from './auth/guards/authGuard';
import { Effect } from './+store/effect';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AppInterceptor } from './app-interceptor';
import { MyCourseComponent } from './my-course/my-course.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';




@NgModule({
  declarations: [
   AppComponent,
    HomeComponent,
    GalleryComponent,
    CoachesComponent,
    OrderComponent,
    CoursesComponent,
    NotFoundComponent,
    MyCourseComponent,
],

  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, AuthModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([Effect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    


  ],
  providers: [apiServer, AuthGuard, AppInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }