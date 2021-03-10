import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BackendConnectorViewerComponent } from '@HashColonBackend/backend-connector-viewer.component';
let BackendConnectorModule = class BackendConnectorModule {
};
BackendConnectorModule = __decorate([
    NgModule({
        declarations: [
            BackendConnectorViewerComponent
        ],
        imports: [
            CommonModule, FormsModule, ReactiveFormsModule,
            HttpClientModule, MaterialModule
        ]
    })
], BackendConnectorModule);
export { BackendConnectorModule };
//# sourceMappingURL=backend-connector.module.js.map