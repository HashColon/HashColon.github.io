import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HashcolonBlogViewerComponent = class HashcolonBlogViewerComponent {
    constructor() {
        this.topicListExpanded = true;
        this.pageListExpanded = false;
        this.topics = ['babo', 'test', 'hehe'];
        this.pages = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5'];
        this.test = '<b>aaaa</b>';
    }
    ngOnInit() {
    }
};
HashcolonBlogViewerComponent = __decorate([
    Component({
        selector: 'app-hashcolon-blog-viewer',
        templateUrl: './hashcolon-blog-viewer.component.html',
        styleUrls: ['./hashcolon-blog-viewer.component.scss']
    })
], HashcolonBlogViewerComponent);
export { HashcolonBlogViewerComponent };
//# sourceMappingURL=hashcolon-blog-viewer.component.js.map