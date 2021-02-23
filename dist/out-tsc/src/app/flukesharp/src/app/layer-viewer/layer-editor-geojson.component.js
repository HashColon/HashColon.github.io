import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeoJSON } from 'leaflet';
import { GeoJsonValidator } from '@fluke/services/geojson-validator';
export class GeoJsonErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let LayerEditorGeojsonComponent = class LayerEditorGeojsonComponent {
    constructor(manager) {
        this.manager = manager;
    }
    _isFormError() {
        if (this.formControl.hasError('jsonInvalid')
            || this.formControl.hasError('geoJsonInvalid')
            || this.formControl.hasError('required')) {
            return true;
        }
        else
            return false;
    }
    _editLayer() {
        try {
            this.manager.editLayer(new GeoJSON(JSON.parse(this.formControl.value)), this.label);
        }
        catch (e) {
            //console.log('_editLayer: ' + this.formControl.value);
            return false;
        }
        return true;
    }
    _editLayerSynced() {
        if (!this._isFormError()) {
            this._editLayer();
        }
    }
    ngOnInit() {
        // if layer is not given
        if (!this.layer) {
            this.layer = new GeoJSON();
        }
        this.formControl = new FormControl(JSON.stringify(this.layer.toGeoJSON(), null, 2), [Validators.required, GeoJsonValidator]);
        this.errorChecker = new GeoJsonErrorStateMatcher();
    }
};
LayerEditorGeojsonComponent.type = "GeoJSON";
__decorate([
    Input()
], LayerEditorGeojsonComponent.prototype, "label", void 0);
__decorate([
    Input()
], LayerEditorGeojsonComponent.prototype, "layer", void 0);
LayerEditorGeojsonComponent = __decorate([
    Component({
        selector: 'fluke-layer-editor-geojson',
        templateUrl: './layer-editor-geojson.component.html',
        styleUrls: ['./layer-editor-geojson.component.scss']
    })
], LayerEditorGeojsonComponent);
export { LayerEditorGeojsonComponent };
//# sourceMappingURL=layer-editor-geojson.component.js.map