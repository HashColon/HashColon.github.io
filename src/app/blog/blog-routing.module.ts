import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashcolonBlogHomeComponent } from '@HashColon/blog/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@HashColon/blog/hashcolon-blog-viewer.component';

const routes: Routes = [
  { path: 'blog', redirectTo: '/blog/viewer', pathMatch: 'full' },
  { path: 'blog/home', component: HashcolonBlogHomeComponent },
  { path: 'blog/viewer', component: HashcolonBlogViewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
