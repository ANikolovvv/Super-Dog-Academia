import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoachesComponent } from './coaches/coaches.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'gallery',component:GalleryComponent},
  {path:"courses",component:CoursesComponent},
  {path:"coaches",component:CoachesComponent},
  {path:"auth/register",component:RegisterComponent},
  {path:"auth/login",component:LoginComponent},
  {path:"auth/logout",component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
