import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CommandViewerComponent = class CommandViewerComponent {
    constructor(backend) {
        this.backend = backend;
        this.terminalDisplayOptions = {
            cursorBlink: false,
            cursorStyle: 'bar'
        };
    }
    ngOnInit() {
    }
};
CommandViewerComponent = __decorate([
    Component({
        selector: 'fluke-command-viewer',
        templateUrl: './command-viewer.component.html',
        styleUrls: ['./command-viewer.component.scss']
    })
], CommandViewerComponent);
export { CommandViewerComponent };
//# sourceMappingURL=command-viewer.component.js.map