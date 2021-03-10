import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as PageUtil from '@blog-builder/page-manager-utility';
let BlogPageComponent = class BlogPageComponent {
    constructor(sanitizer, renderer, element) {
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        hljs.highlightAll();
    }
    _getDateTimeString(date) {
        return PageUtil.getDateString(date, "MMM.dd.yyyy(ddd) hh:mm");
        // console.log(date.toDateString() + "/\n" + date.toISOString() + "/\n" +
        //   date.toLocaleDateString() + "/\n" + date.toLocaleString() + "/\n" +
        //   date.toLocaleTimeString() + "/\n" + date.toString() + "/\n" +
        //   date.toTimeString() + "/\n" + date.toUTCString() + "/\n");
        // return date.toDateString() + "/\n" + date.toISOString() + "/\n" +
        //   date.toLocaleDateString() + "/\n" + date.toLocaleString() + "/\n" +
        //   date.toLocaleTimeString() + "/\n" + date.toString() + "/\n" +
        //   date.toTimeString() + "/\n" + date.toUTCString() + "/\n";
    }
};
__decorate([
    Input()
], BlogPageComponent.prototype, "page", void 0);
BlogPageComponent = __decorate([
    Component({
        selector: 'blog-page',
        templateUrl: './blog-page.component.html',
        styleUrls: ['./blog-page.component.scss']
    })
], BlogPageComponent);
export { BlogPageComponent };
//# sourceMappingURL=blog-page.component.js.map