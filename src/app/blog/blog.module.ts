import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@HashColon/material.module';

import { BlogRoutingModule } from '@HashColon/blog/blog-routing.module';
import { HashcolonBlogHomeComponent } from '@HashColon/blog/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from './hashcolon-blog-viewer.component';


@NgModule({
  declarations: [HashcolonBlogHomeComponent, HashcolonBlogViewerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
