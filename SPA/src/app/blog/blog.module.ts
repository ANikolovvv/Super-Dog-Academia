import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CoreModule } from "../core/core.module";



@NgModule({
    declarations: [
        BlogComponent
    ],
    imports: [
        CommonModule,
        LazyRoutingModule,
        CoreModule
    ]
})
export class LazyModule { }