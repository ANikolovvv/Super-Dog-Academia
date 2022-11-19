import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { ButtonUpComponent } from './button-up/button-up.component'
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/guards/authGuard';
import { LocalStorage } from './storage-inject';




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

  ],
  providers: [AuthService, AuthGuard, {
    provide: LocalStorage,
    useFactory: (platformId: Object) => {
      if (isPlatformBrowser(platformId)) {
        return window.localStorage
      }
      if (isPlatformServer(platformId)) {
        return class implements Storage {

          length = 0;
          private data: Record<string, string> = {};
          clear(): void {
            this.data = {};
          }
          getItem(key: string): string | null {
            return this.data[key];
          }
          key(index: number): string | null {
            throw new Error('Method not implemented.');
          }
          removeItem(key: string): void {
            const { [key]: removeItem, ...other } = this.data;
            this.data = other;
          }
          setItem(key: string, value: string): void {
            this.data[key] = value;
          }

        }
      }
      throw new Error('No working')

    },
    deps: [(PLATFORM_ID)]

  }]

})
export class CoreModule { }
