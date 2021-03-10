import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { GeoJSON, Marker } from 'leaflet';
import * as leafletSetting from '@fluke/services/leaflet-custom-settings';
let LayerViewerComponent = class LayerViewerComponent {
    constructor(manager) {
        this.manager = manager;
        this.layerTypes = {
            'GeoJSON': GeoJSON,
            'Marker': Marker
        };
    }
    ngOnInit() {
    }
    _addNewLayer(type) {
        var newlayer;
        switch (type) {
            // Special cases which needs inputs for new layer object
            case 'Marker': {
                newlayer = new Marker([0, 0], { icon: leafletSetting.markerIcon });
                break;
            }
            // other cases 
            default: {
                newlayer = new this.layerTypes[type]();
            }
        }
        this.manager.pushLayer(newlayer, null, { forced: true });
    }
    _getLayerType(layer) {
        for (let type in this.layerTypes) {
            if (layer instanceof this.layerTypes[type]) {
                return type;
            }
        }
        return 'unknown';
    }
    _addNewFileLayers(event) {
        let filelist = event.target.files;
        for (let fidx of Object.keys(filelist)) {
            let blob;
            let fileReader = new FileReader();
            console.log("addnewfilelayers: " + filelist[fidx].name);
            fileReader.onload = (e) => {
                console.log(filelist[fidx].name + ' loaded');
                let geojson;
                // check geojson validity 
                try {
                    geojson = JSON.parse(fileReader.result.toString());
                }
                catch (e) {
                    console.log('Invalid JSON file.');
                    return false;
                }
                finally {
                    // if (!GJV.valid(geojson)) {
                    //   console.log('Invalid GeoJSON file.');
                    //   return false;
                    // } else {
                    //   console.log(filelist[fidx].name + ' validated');
                    // }
                }
                this.manager.pushGeoJsonLayer(geojson, filelist[fidx].name, { forced: true });
                console.log(filelist[fidx].name + ' loaded as layer to leaflet-map');
            };
            fileReader.readAsText(filelist[fidx]);
        }
        return true;
    }
    _clearAllLayers() {
        this.manager.clearAll();
    }
    _showAllLayers() {
        this.manager.showAll();
    }
    _hideAllLayers() {
        this.manager.hideAll();
    }
};
__decorate([
    ViewChild(MatAccordion)
], LayerViewerComponent.prototype, "layerlist", void 0);
LayerViewerComponent = __decorate([
    Component({
        selector: 'fluke-layer-viewer',
        templateUrl: './layer-viewer.component.html',
        styleUrls: ['./layer-viewer.component.scss']
    })
], LayerViewerComponent);
export { LayerViewerComponent };
//# sourceMappingURL=layer-viewer.component.js.map