import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let HashcolonBlogPageviewerComponent = class HashcolonBlogPageviewerComponent {
    constructor(renderer, el, sanitizer, pageMgr) {
        //console.log(this.route.snapshot.url.join('/'));
        this.renderer = renderer;
        this.el = el;
        this.sanitizer = sanitizer;
        this.pageMgr = pageMgr;
    }
    getPageContent(page) {
        return this.sanitizer.bypassSecurityTrustHtml(page.replace(this.getPageHeaderString(page), ''));
    }
    ngOnInit() {
        this.pageMgr.getHTML(this.pageSrc)
            .subscribe(page => {
            this.header = this.getPageHeader(page);
            this.content = this.getPageContent(page);
        });
    }
};
__decorate([
    Input()
], HashcolonBlogPageviewerComponent.prototype, "pageSrc", void 0);
HashcolonBlogPageviewerComponent = __decorate([
    Component({
        selector: 'hashcolon-blog-pageviewer',
        templateUrl: './hashcolon-blog-pageviewer.component.html',
        styleUrls: ['./hashcolon-blog-pageviewer.component.scss'],
        encapsulation: ViewEncapsulation.Emulated
    })
], HashcolonBlogPageviewerComponent);
export { HashcolonBlogPageviewerComponent };
//# sourceMappingURL=hashcolon-blog-pageviewer.component.js.map