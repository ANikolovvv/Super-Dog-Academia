import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/authGuard';



@NgModule({
  declarations: [
   RegisterComponent,
   LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers:[AuthService,AuthGuard]
})
export class AuthModule { }
