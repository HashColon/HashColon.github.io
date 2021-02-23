import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Polyline, GeoJSON, Marker, Path, Polygon, Rectangle, Circle, CircleMarker } from 'leaflet';
import { LayerEditorMarkerComponent } from '@fluke/layer-viewer/layer-editor-marker.component';
import * as leafletSetting from '@fluke/services/leaflet-custom-settings';
let MapViewerComponent = class MapViewerComponent {
    constructor(layers, backend) {
        this.layers = layers;
        this.backend = backend;
        this.togglePickPos = false;
        this.options = leafletSetting.options;
        this.sliderVal = 20;
        this.sideNavWidth = '20vw';
    }
    ngOnInit() {
        Path.mergeOptions(leafletSetting.defaultPathStyles);
        Polyline.mergeOptions(leafletSetting.defaultPathStyles);
        Polygon.mergeOptions(leafletSetting.defaultPathStyles);
        Rectangle.mergeOptions(leafletSetting.defaultPathStyles);
        Circle.mergeOptions(leafletSetting.defaultPathStyles);
        CircleMarker.mergeOptions(leafletSetting.defaultPathStyles);
        GeoJSON.mergeOptions(leafletSetting.defaultPathStyles);
    }
    _sideNavWidthChange() {
        this.sideNavWidth = this.sliderVal.toString() + 'vw';
    }
    // layers: LayerManagerService = new LayerManagerService();
    onMapReady(map) {
        this.layers.map = map;
        // this.geojsonimporter.getGeoJson("geojson/test_All.json").subscribe(
        //   (data) => {
        //     this.layers.pushLayer(new GeoJSON(data), "test_All.json");
        //   }
        // );
    }
    onMapClick(e) {
        this.picker.latFormControl.setValue(e.latlng.lat);
        this.picker.lngFormControl.setValue(e.latlng.lng);
        if (this.togglePickPos) {
            this.layers.pushLayer(new Marker([e.latlng.lat, e.latlng.lng], {
                icon: leafletSetting.markerIcon
            }), null, { forced: true });
        }
    }
};
__decorate([
    ViewChild(LayerEditorMarkerComponent)
], MapViewerComponent.prototype, "picker", void 0);
MapViewerComponent = __decorate([
    Component({
        selector: 'fluke-map-viewer',
        templateUrl: './map-viewer.component.html',
        styleUrls: ['./map-viewer.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], MapViewerComponent);
export { MapViewerComponent };
//# sourceMappingURL=map-viewer.component.js.map