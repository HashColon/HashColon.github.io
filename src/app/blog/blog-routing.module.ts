import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashcolonBlogHomeComponent } from '@HashColon/blog/hashcolon-blog-home.component';

const routes: Routes = [
  { path: 'blog', redirectTo: '/blog/home', pathMatch: 'full' },
  { path: 'blog/home', component: HashcolonBlogHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
