import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/authGuard';

import { CoachesComponent } from './coaches/coaches.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: 'auth', loadChildren: () => import("../app/auth/auth.module").then(m => m.AuthModule) },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  {
    path: "courses", component: CoursesComponent,
    canActivate: [AuthGuard],
    data: { authCuard: true, authRedirect: '/auth/login' }
  },
  {
    path: "coaches", component: CoachesComponent,
    canActivate: [AuthGuard],
    data: {
      authCuard: true,
      authRedirect: '/auth/login'
    }
  },
  {
    path: "order/:id", component: OrderComponent,
    canActivate: [AuthGuard],
    data: { authCuard: true, authRedirect: '/auth/login' }
  },
  { path: "not-found", component: NotFoundComponent },

  { path: "**", redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
