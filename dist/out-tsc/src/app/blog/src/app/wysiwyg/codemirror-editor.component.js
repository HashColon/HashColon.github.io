import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { lineNumbers } from "@codemirror/gutter";
import { history } from "@codemirror/history";
import { foldGutter } from "@codemirror/fold";
import { html } from "@codemirror/lang-html";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { bracketMatching } from "@codemirror/matchbrackets";
import { closeBrackets } from "@codemirror/closebrackets";
import { basicSetup } from "@codemirror/basic-setup";
import { oneDark } from "@codemirror/theme-one-dark";
let CodemirrorEditorComponent = class CodemirrorEditorComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.codeChange = new EventEmitter();
    }
    ngOnInit() {
        // this.div = this.renderer.createElement("_codemirrorViewer");
        //this.renderer.
        this.codemirror = new EditorView({
            state: EditorState.create({
                doc: this.code,
                extensions: [
                    basicSetup,
                    lineNumbers(), history(), foldGutter(),
                    html(),
                    defaultHighlightStyle,
                    bracketMatching(), closeBrackets(),
                    oneDark
                ]
            }),
            dispatch: (tr) => {
                this.codemirror.update([tr]);
                this.codeChange.emit(this.codemirror.state.doc.toString());
            }
        });
        this.renderer.appendChild(this.renderer.selectRootElement('#main'), this.codemirror.dom);
    }
    test() {
        console.log(this.code);
    }
};
__decorate([
    Input()
], CodemirrorEditorComponent.prototype, "code", void 0);
__decorate([
    Output()
], CodemirrorEditorComponent.prototype, "codeChange", void 0);
CodemirrorEditorComponent = __decorate([
    Component({
        selector: 'blog-codemirror-editor',
        templateUrl: './codemirror-editor.component.html',
        styleUrls: ['./codemirror-editor.component.scss']
    })
], CodemirrorEditorComponent);
export { CodemirrorEditorComponent };
//# sourceMappingURL=codemirror-editor.component.js.map