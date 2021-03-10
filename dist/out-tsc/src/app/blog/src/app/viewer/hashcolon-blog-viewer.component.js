import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as PageUtil from '@blog-builder/page-manager-utility';
let HashcolonBlogViewerComponent = class HashcolonBlogViewerComponent {
    constructor(pageMgr) {
        this.pageMgr = pageMgr;
        this.blogHeaderList = "assets/blog/blog-header.json";
        this.selectedTopic = 0;
        this.selectedPage = 0;
        this.isNewpageMode = false;
        this.pageContent = { header: {}, content: '' };
        this.pageMgr.getHTML(this.blogHeaderList)
            .subscribe(obj => {
            console.log(obj);
            var pageHeader = JSON.parse(obj);
            this.links = pageHeader;
            this.topics = Object.keys(pageHeader);
            this.selectedTopic = 0;
            this.pages = Object.keys(this.links[this.topics[this.selectedTopic]]);
            this.selectedPage = 0;
            this.pageMgr.getHTML(this.links[this._selectedTopic()][this._selectedPage()])
                .subscribe(obj => {
                this.pageContent.header = PageUtil.getPageHeader(obj);
                this.pageContent.content = PageUtil.getPageContent(obj);
            });
        });
    }
    ngOnInit() {
    }
    _selectedTopic() {
        return this.topics[this.selectedTopic];
    }
    _selectedPage() {
        return this.pages[this.selectedPage];
    }
    _topicSelected(change) {
        this.selectedTopic = this.topics.indexOf(change.option.value);
        console.log(change.option.value, this.selectedTopic);
        this.pages = Object.keys(this.links[change.option.value]);
        this.selectedPage = 0;
        this.pageMgr.getHTML(this.links[this._selectedTopic()][this._selectedPage()])
            .subscribe(obj => {
            this.pageContent.header = PageUtil.getPageHeader(obj);
            this.pageContent.content = PageUtil.getPageContent(obj);
        });
    }
    _pageSelected(change) {
        this.selectedPage = this.pages.indexOf(change.option.value);
        console.log(change.option.value, this.selectedPage);
        this.pageMgr.getHTML(this.links[this._selectedTopic()][this._selectedPage()])
            .subscribe(obj => {
            this.pageContent.header = PageUtil.getPageHeader(obj);
            this.pageContent.content = PageUtil.getPageContent(obj);
        });
    }
};
__decorate([
    ViewChild('topiclist')
], HashcolonBlogViewerComponent.prototype, "TopicList", void 0);
__decorate([
    ViewChild('pagelist')
], HashcolonBlogViewerComponent.prototype, "PageList", void 0);
__decorate([
    ViewChild('topicnav')
], HashcolonBlogViewerComponent.prototype, "TopicNav", void 0);
__decorate([
    ViewChild('pagenav')
], HashcolonBlogViewerComponent.prototype, "PageNav", void 0);
HashcolonBlogViewerComponent = __decorate([
    Component({
        selector: 'app-hashcolon-blog-viewer',
        templateUrl: './hashcolon-blog-viewer.component.html',
        styleUrls: ['./hashcolon-blog-viewer.component.scss']
    })
], HashcolonBlogViewerComponent);
export { HashcolonBlogViewerComponent };
//# sourceMappingURL=hashcolon-blog-viewer.component.js.map