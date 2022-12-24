import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth/guards/authGuard';

import { CoachesComponent } from './coaches/coaches.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

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
    path: "my-course", component: MyCourseComponent,
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
  {
    path: "blog",// component: BlogComponent,
    loadChildren: () => import('./blog/blog.module').then(m => m.LazyModule)
    //canActivate: [AuthGuard],
    //data: { authCuard: true, authRedirect: '/auth/login' }
  },
 
  { path: "not-found", component: NotFoundComponent },

  { path: "**", redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
