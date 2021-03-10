import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashcolonBlogHomeComponent } from '@blog/home/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/viewer/hashcolon-blog-viewer.component';
import { WysiwygComponent } from '@blog/wysiwyg/wysiwyg.component';
const routes = [{
        path: 'blog',
        //redirectTo: '/blog/viewer', pathMatch: 'full',
        children: [
            { path: 'home', component: HashcolonBlogHomeComponent },
            { path: 'viewer', component: HashcolonBlogViewerComponent },
            { path: 'newpage', component: WysiwygComponent }
        ]
    }];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], BlogRoutingModule);
export { BlogRoutingModule };
//# sourceMappingURL=blog-routing.module.js.map