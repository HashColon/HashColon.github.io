import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@blog/material.module';
import { BlogRoutingModule } from '@blog/blog-routing.module';
import { HashcolonBlogHomeComponent } from '@blog/home/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/viewer/hashcolon-blog-viewer.component';
import { BlogPageComponent } from '@blog/page/blog-page.component';
import { WysiwygComponent } from '@blog/wysiwyg/wysiwyg.component';
import { CodemirrorEditorComponent } from './wysiwyg/codemirror-editor.component';
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    NgModule({
        declarations: [
            HashcolonBlogHomeComponent, HashcolonBlogViewerComponent,
            BlogPageComponent,
            WysiwygComponent,
            CodemirrorEditorComponent
        ],
        imports: [
            CommonModule, HttpClientModule,
            MaterialModule,
            // HighlightModule,
            BlogRoutingModule,
            ReactiveFormsModule
        ],
    })
], BlogModule);
export { BlogModule };
//# sourceMappingURL=blog.module.js.map