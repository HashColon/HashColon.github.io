import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let BackendConnectorViewerComponent = class BackendConnectorViewerComponent {
    constructor(backend) {
        this.backend = backend;
        this.wsControl = new FormControl();
        this.backend.socketReadyEvent.prependOnceListener("socketready", () => {
            this.wsControl.setValue(this.backend.address);
        });
    }
    ngOnInit() {
    }
    connectBackend(address) {
        this.backend.connectBackend(address);
    }
    troubleshootWSS() {
        window.open("https://" + this.backend.address);
    }
};
BackendConnectorViewerComponent = __decorate([
    Component({
        selector: 'hashcolon-backend-connector-viewer',
        templateUrl: './backend-connector-viewer.component.html',
        styleUrls: ['./backend-connector-viewer.component.scss']
    })
], BackendConnectorViewerComponent);
export { BackendConnectorViewerComponent };
//# sourceMappingURL=backend-connector-viewer.component.js.map