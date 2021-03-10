import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BlogPageComponent } from '@blog/page/blog-page.component';
let WysiwygComponent = class WysiwygComponent {
    constructor() {
        this.editor = {
            header: {
                title: '', topic: [], tags: [],
                datetime: new Date()
            },
            content: ''
        };
    }
    ngOnInit() {
        this.titleControl = new FormControl();
        this.topicControl = new FormControl();
        this.tagsControl = new FormControl();
        this.contentControl = new FormControl();
        this.dateControl = new FormControl();
    }
    _editTitle() {
        this.editor.header.title = this.titleControl.value;
    }
    _editTags() {
    }
    _editTopic() {
    }
    _editContent() {
        this.editor.content = this.contentControl.value;
    }
    testEditorContent(e) {
    }
};
__decorate([
    ViewChild(BlogPageComponent)
], WysiwygComponent.prototype, "pageView", void 0);
WysiwygComponent = __decorate([
    Component({
        selector: 'blog-wysiwyg',
        templateUrl: './wysiwyg.component.html',
        styleUrls: ['./wysiwyg.component.scss']
    })
], WysiwygComponent);
export { WysiwygComponent };
//# sourceMappingURL=wysiwyg.component.js.map