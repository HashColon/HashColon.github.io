import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LayerEditorComponent = class LayerEditorComponent {
    constructor(manager) {
        this.manager = manager;
        this.isDisabled = false;
        this.isRenameLayer = false;
    }
    ngOnInit() {
    }
    _renameLayer(newname) {
        if (this.manager.renameLayer(this.label, newname)) {
            this.label = newname;
            return true;
        }
        console.log('edit fail');
        return false;
    }
    _toggleLayer() {
        return this.manager.toggleLayer(this.label);
    }
    _deleteLayer() {
        return this.manager.removeLayer(this.label);
    }
};
__decorate([
    Input()
], LayerEditorComponent.prototype, "label", void 0);
__decorate([
    Input()
], LayerEditorComponent.prototype, "layer", void 0);
__decorate([
    Input()
], LayerEditorComponent.prototype, "type", void 0);
LayerEditorComponent = __decorate([
    Component({
        selector: 'fluke-layer-editor',
        templateUrl: './layer-editor.component.html',
        styleUrls: ['./layer-editor.component.scss']
    })
], LayerEditorComponent);
export { LayerEditorComponent };
//# sourceMappingURL=layer-editor.component.js.map