import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/authGuard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppEmailDirective } from './validators/app-email.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  exports: [AppEmailDirective]
})
export class AuthModule { }
