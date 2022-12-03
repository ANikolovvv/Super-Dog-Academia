import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AuthGuard } from './guards/authGuard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
   {
      path: "auth/login",
      component: LoginComponent,
      canActivate:[AuthGuard],
      data: {
         authCuard: false,
         authRedirect: '/'
      }
   },
   {
      path: "auth/register",
      component: RegisterComponent,
      canActivate:[AuthGuard],
      data: {
         authCuard: false,
         authRedirect: '/'
      }
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AuthRoutingModule { }
//export const AuthRoutingModule=RouterModule.forChild(routes);