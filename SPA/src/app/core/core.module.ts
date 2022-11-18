import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from "./footer/footer.component";
import { RouterModule} from '@angular/router';
import {routes} from "../app-routing.module";
import { LoaderComponent } from './loader/loader.component';
import { ButtonUpComponent } from './button-up/button-up.component'




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ButtonUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    LoaderComponent,
    ButtonUpComponent
    
  ]
})
export class CoreModule { }
