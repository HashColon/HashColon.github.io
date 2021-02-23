import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@HashColon/material.module';
import { BlogRoutingModule } from '@blog/blog-routing.module';
import { HashcolonBlogHomeComponent } from '@blog/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/hashcolon-blog-viewer.component';
import { HashcolonBlogPageviewerComponent } from '@blog/hashcolon-blog-pageviewer.component';
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    NgModule({
        declarations: [HashcolonBlogHomeComponent, HashcolonBlogViewerComponent, HashcolonBlogPageviewerComponent],
        imports: [
            CommonModule,
            MaterialModule,
            BlogRoutingModule
        ]
    })
], BlogModule);
export { BlogModule };
//# sourceMappingURL=blog.module.js.map