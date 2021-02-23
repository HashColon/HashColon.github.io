import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashcolonBlogHomeComponent } from '@blog/hashcolon-blog-home.component';
import { HashcolonBlogViewerComponent } from '@blog/hashcolon-blog-viewer.component';
const routes = [
    { path: 'blog', redirectTo: '/blog/viewer', pathMatch: 'full' },
    { path: 'blog/home', component: HashcolonBlogHomeComponent },
    { path: 'blog/viewer', component: HashcolonBlogViewerComponent }
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], BlogRoutingModule);
export { BlogRoutingModule };
//# sourceMappingURL=blog-routing.module.js.map