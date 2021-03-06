import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { LayerGroup, GeoJSON } from 'leaflet';
// import { FlukeSharpModule } from '@fluke/flukesharp.module';
let LayerManagerService = class LayerManagerService {
    constructor() {
        this.labeled = {};
        this.visible = [];
        this.autoStyle = false;
        this.stylefunc_Manual = (feature) => {
            if (feature.properties && feature.properties.style) {
                return feature.properties.style;
            }
            return {};
        };
    }
    stylefunc_Auto(val) {
        if (val < 0.0 || val > 1.0) {
            throw "layer-manager.service::stylefunc_autoSpectrum : given val is not in range [0,1]";
        }
        else {
            return () => {
                return {
                    color: "hsl(" + (val * 360.0) + ", 100%, 40%) "
                };
            };
        }
    }
    setAllGeoJsonStyles_Auto() {
        // count geojson layers in visibile
        var geojsoncnt = 0;
        for (var lidx in this.visible) {
            if (this.visible[lidx] instanceof GeoJSON) {
                geojsoncnt++;
            }
        }
        var cnt = 0;
        for (var lidx in this.visible) {
            if (this.visible[lidx] instanceof GeoJSON) {
                this.visible[lidx].setStyle(this.stylefunc_Auto(cnt / geojsoncnt));
                cnt++;
            }
        }
    }
    setAllGeoJsonStyles_Reset() {
        for (var lidx in this.visible) {
            if (this.visible[lidx] instanceof GeoJSON) {
                this.visible[lidx].resetStyle();
            }
        }
    }
    toggleStyle() {
        this.autoStyle = !this.autoStyle;
        if (this.autoStyle) {
            this.setAllGeoJsonStyles_Auto();
        }
        else {
            this.setAllGeoJsonStyles_Reset();
        }
    }
    // rename a layer
    renameLayer(label, newlabel) {
        if (this.hasLabel(newlabel)) {
            return false;
        }
        this.labeled[newlabel] = this.labeled[label];
        delete this.labeled[label];
        return true;
    }
    // generate random string of 5 character
    generateRandomName() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    }
    // check if layer is visible 
    isVisible(label) {
        return this.visible.indexOf(this.labeled[label]) >= 0;
    }
    // check if layer is in the manager service 
    hasLabel(label) {
        return label in this.labeled;
    }
    // remove layer from visible (not recommended to use this function. use toggleLayer instead.)
    hideLayer(label) {
        if (this.hasLabel(label)) {
            this.visible.splice(this.visible.indexOf(this.labeled[label]), 1);
            return true;
        }
        else
            return false;
    }
    // inserts a new layer. 
    // if a layer with the given label exists, does return true. else, return false.
    pushLayer(layer, label, options = { hide: false, forced: false }) {
        var newlabel = label === null ? '' : label.trim();
        if (this.hasLabel(newlabel) ||
            (!(label && label.trim().length))) {
            if (options.forced) {
                newlabel = newlabel + ((newlabel.length) ? '_' : '') + this.generateRandomName();
                while (this.hasLabel(newlabel)) {
                    newlabel = label + '_' + this.generateRandomName();
                }
            }
            else {
                return false;
            }
        }
        // add new labeled layer
        this.labeled[newlabel] = layer;
        // if the layer is set as visible, make it visible.
        if (!options.hide) {
            this.visible.push(this.labeled[newlabel]);
        }
        // if autoStyle is on, apply it.
        if (this.autoStyle)
            this.setAllGeoJsonStyles_Auto();
        return true;
    }
    pushGeoJsonLayer(geoJsonObj, label, options = { hide: false, forced: false }) {
        //check if style exists.
        return this.pushLayer(new GeoJSON(geoJsonObj, {
            style: this.stylefunc_Manual
        }), label, options);
    }
    // edits a existing layer. 
    // if a layer with the given label exists, return true. else, return false.
    editLayer(layer, label) {
        if (!this.hasLabel(label)) {
            return false;
        }
        else {
            // if the layer is visible, make it invisible
            var checktoggle;
            if (this.isVisible(label)) {
                this.toggleLayer(label);
                checktoggle = true;
            }
            else {
                checktoggle = false;
            }
            // if the layer is type of layer group, edit the layer inside the group
            if (this.labeled[label] instanceof LayerGroup) {
                this.labeled[label].clearLayers();
                this.labeled[label].addLayer(layer);
            }
            // if the layer was visible, turn it back on.
            if (checktoggle) {
                this.toggleLayer(label);
            }
            // if autoStyle is on, apply it.
            if (this.autoStyle)
                this.setAllGeoJsonStyles_Auto();
            return true;
        }
    }
    editGeoJsonLayer(geoJsonObj, label) {
        if (!this.hasLabel(label)) {
            return false;
        }
        else {
            // if the layer is visible, make it invisible
            var checktoggle;
            if (this.isVisible(label)) {
                this.toggleLayer(label);
                checktoggle = true;
            }
            else {
                checktoggle = false;
            }
            // if the layer is type of layer group, edit the layer inside the group
            // if the layer is type of layer group, edit the layer inside the group
            if (this.labeled[label] instanceof LayerGroup) {
                this.labeled[label].clearLayers();
                this.labeled[label].addLayer(new GeoJSON(geoJsonObj, {
                    style: this.stylefunc_Manual
                }));
            }
            // if the layer was visible, turn it back on.
            if (checktoggle) {
                this.toggleLayer(label);
            }
            // if autoStyle is on, apply it.
            if (this.autoStyle)
                this.setAllGeoJsonStyles_Auto();
            return true;
        }
    }
    // remove layer with the given label
    // if a layer with the given label exists, return true. else, return false.
    removeLayer(label) {
        if (this.hasLabel(label)) {
            if (this.isVisible(label)) {
                this.hideLayer(label);
            }
            delete this.labeled[label];
            // if autoStyle is on, apply it.
            if (this.autoStyle)
                this.setAllGeoJsonStyles_Auto();
            return true;
        }
        else
            return false;
    }
    // make it visible if not, hide it if not visible
    // if a layer with the given label does not exists, return false. 
    toggleLayer(label) {
        var re = false;
        if (this.hasLabel(label)) {
            if (this.isVisible(label)) {
                this.hideLayer(label);
            }
            else {
                this.visible.push(this.labeled[label]);
            }
            re = true;
        }
        // if autoStyle is on, apply it.
        if (this.autoStyle)
            this.setAllGeoJsonStyles_Auto();
        return re;
    }
    clearAll() {
        delete this.visible;
        this.visible = [];
        delete this.labeled;
        this.labeled = {};
    }
    hideAll() {
        delete this.visible;
        this.visible = [];
    }
    showAll() {
        for (var key of Object.keys(this.labeled)) {
            if (!this.isVisible(key)) {
                this.toggleLayer(key);
            }
        }
        // if autoStyle is on, apply it.
        if (this.autoStyle)
            this.setAllGeoJsonStyles_Auto();
    }
};
LayerManagerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LayerManagerService);
export { LayerManagerService };
//# sourceMappingURL=layer-manager.service.js.map