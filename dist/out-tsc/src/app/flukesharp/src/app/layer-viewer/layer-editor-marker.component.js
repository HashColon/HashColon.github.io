import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Marker } from 'leaflet';
import { LatValidator, LngValidator } from '@fluke/services/latlng-validator';
export class LatErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
export class LngErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let LayerEditorMarkerComponent = class LayerEditorMarkerComponent {
    constructor(manager) {
        this.manager = manager;
    }
    _isLatFormError() {
        return (this.latFormControl.hasError('latInvalid')
            || this.latFormControl.hasError('notNumber')
            || this.latFormControl.hasError('required'));
    }
    _isLngFormError() {
        return (this.lngFormControl.hasError('lngInvalid')
            || this.latFormControl.hasError('notNumber')
            || this.lngFormControl.hasError('required'));
    }
    _isFormError() {
        return this._isLatFormError() || this._isLngFormError();
    }
    _editLayer() {
        if (this.label) {
            this.manager.labeled[this.label].setLatLng({ lat: this.latFormControl.value, lng: this.lngFormControl.value });
            return true;
        }
        else
            return false;
    }
    _editLayerSynced() {
        if (!this._isFormError()) {
            this._editLayer();
        }
    }
    ngOnInit() {
        // if layer is not given
        if (!this.layer) {
            this.layer = new Marker([0, 0]);
        }
        // lat form control
        this.latFormControl = new FormControl(this.layer.getLatLng().lat, [Validators.required, LatValidator]);
        this.latErrorChecker = new LatErrorStateMatcher();
        // lng form control
        this.lngFormControl = new FormControl(this.layer.getLatLng().lng, [Validators.required, LngValidator]);
        this.lngErrorChecker = new LngErrorStateMatcher();
    }
};
LayerEditorMarkerComponent.type = "Marker";
__decorate([
    Input()
], LayerEditorMarkerComponent.prototype, "label", void 0);
__decorate([
    Input()
], LayerEditorMarkerComponent.prototype, "layer", void 0);
LayerEditorMarkerComponent = __decorate([
    Component({
        selector: 'fluke-layer-editor-marker',
        templateUrl: './layer-editor-marker.component.html',
        styleUrls: ['./layer-editor-marker.component.scss']
    })
], LayerEditorMarkerComponent);
export { LayerEditorMarkerComponent };
//# sourceMappingURL=layer-editor-marker.component.js.map