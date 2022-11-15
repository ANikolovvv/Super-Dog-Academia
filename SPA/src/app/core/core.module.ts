import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from "./footer/footer.component";
import { RouterModule} from '@angular/router';
import {routes} from "../app-routing.module";
import { LoaderComponent } from './loader/loader.component'




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    LoaderComponent
    
  ]
})
export class CoreModule { }
