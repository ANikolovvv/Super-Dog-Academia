import { RouterModule, Routes } from "@angular/router";
import { ArticleComponent } from "../article/article.component";
import { AuthGuard } from "../auth/guards/authGuard";
import { BlogComponent} from "./blog.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlogComponent,
    //  canActivate: [AuthGuard],
    // data: { authCuard: true, authRedirect: '/auth/login' }
  },
  {
      path: ":id", component: ArticleComponent,
    //   canActivate: [AuthGuard],
    //   data: { authCuard: true, authRedirect: '/auth/login' }
    },
];

export const LazyRoutingModule = RouterModule.forChild(routes);