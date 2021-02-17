import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from '@HashColon/blog/blog-routing.module';
import { HashcolonBlogHomeComponent } from '@HashColon/blog/hashcolon-blog-home.component';


@NgModule({
  declarations: [HashcolonBlogHomeComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
