import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from "@angular/common";

import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { routes } from "../../app-routing.module"

import { HeaderComponent } from './header.component';
import { HomeComponent } from 'src/app/home/home.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { AppComponent } from 'src/app/app.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthModule } from 'src/app/auth/auth.module';
import { CoreModule } from '../core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
   let guest = localStorage.getItem('<USER>');
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports:[CoreModule,RouterModule.forRoot(routes),BrowserAnimationsModule],
      providers:[AuthModule,HttpClient,HttpHandler],
      
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [(1),
        HomeComponent,
        GalleryComponent,
        LoginComponent,
        RegisterComponent

      ]
    });
    router = TestBed.get(Router); (2)
    location = TestBed.get(Location); (3)

    fixture = TestBed.createComponent(AppComponent); (4)
    router.initialNavigation(); (5)
  });
  it('navigate to "" redirects you to /home', fakeAsync(() => {
    (1)
    router.navigate(['']); (2)
    tick(); (3)
    expect(location.path()).toBe('/home'); (4)
  }));
  it('navigate to "gallery" takes you to /gallery', fakeAsync(() => {
    router.navigate(['/gallery']);
    tick();
    console.log(location.path())
    expect(location.path()).toBe('/gallery');
  }));
});
