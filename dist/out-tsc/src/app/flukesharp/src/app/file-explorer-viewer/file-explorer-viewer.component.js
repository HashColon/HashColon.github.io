import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlukeSharpMessageType } from '@fluke/services/flukesharp-message';
import { GeoJSON } from 'leaflet';
var msgtype;
(function (msgtype) {
    msgtype[msgtype["filelist"] = 0] = "filelist";
    msgtype[msgtype["dirlist"] = 1] = "dirlist";
    msgtype[msgtype["geojson"] = 2] = "geojson";
})(msgtype || (msgtype = {}));
;
let FileExplorerViewerComponent = class FileExplorerViewerComponent {
    constructor(backend, layers) {
        this.backend = backend;
        this.layers = layers;
        this.dirControl = new FormControl();
        this._home = "/home/cadit/WTK/WTK_data";
        this.msgKeyList = {};
        this.dirAutocompleteList = ["Backend Not Connected"];
        this.geojsonFiles = ["Backend Not Connected"];
        this.selectedFiles = [];
        this.backend.socketReadyEvent.prependOnceListener("socketready", () => {
            this.dirControl.setValue(this._home);
            this.backend.getConnector()
                .subscribe((data) => {
                var parsedJson;
                try {
                    parsedJson = JSON.parse(data);
                }
                catch (e) {
                    console.error('Parsing returned message failed');
                }
                if (parsedJson.messageType == FlukeSharpMessageType.error) {
                    switch (this.msgKeyList[parsedJson.messageKey]) {
                        case msgtype.dirlist:
                        case msgtype.filelist:
                            break;
                        default:
                            console.log(parsedJson.messageContent);
                    }
                }
                else if (parsedJson.messageType == FlukeSharpMessageType.return) {
                    switch (this.msgKeyList[parsedJson.messageKey]) {
                        case msgtype.dirlist:
                            this.retrieveDirList(parsedJson);
                            break;
                        case msgtype.filelist:
                            this.retrieveFileList(parsedJson);
                            break;
                        case msgtype.geojson:
                            this.retrieveGeoJson(parsedJson);
                            break;
                        default:
                            break;
                    }
                }
            });
            this.requestFileList(this.dirControl.value, ".json");
            this.requestDirList(this.dirControl.value);
        });
    }
    requestFileList(root, extension, recursive = false, options) {
        var key = this.backend.requestFileList(this.dirControl.value, ".json", recursive, options);
        this.msgKeyList[key] = msgtype.filelist;
    }
    retrieveFileList(msg) {
        this.geojsonFiles = msg.messageContent;
    }
    requestDirList(root) {
        var key = this.backend.requestDirList(root);
        this.msgKeyList[key] = msgtype.dirlist;
    }
    retrieveDirList(msg) {
        this.dirAutocompleteList = msg.messageContent;
    }
    _renewDirList() {
        this.requestDirList(this.dirControl.value);
    }
    _renewFileList() {
        this.requestFileList(this.dirControl.value, ".json");
    }
    _editDirSynced() {
        this.requestFileList(this.dirControl.value, ".json");
        this.requestDirList(this.dirControl.value);
    }
    _setDirHome() {
        this.dirControl.setValue(this._home);
        this._editDirSynced();
    }
    requestSelectedGeoJson() {
        var reqfilelist = [];
        for (var afile of this.selectedFiles) {
            try {
                var path = this.dirControl.value.endsWith('/')
                    ? this.dirControl.value : this.dirControl.value + '/';
                reqfilelist.push(path + afile);
            }
            catch (e) { }
        }
        console.log(reqfilelist);
        var key = this.backend.requestGeoJsons(reqfilelist);
        this.msgKeyList[key] = msgtype.geojson;
    }
    retrieveGeoJson(msg) {
        var geojsons = msg.messageContent;
        for (var item of geojsons) {
            try {
                var geojson = JSON.parse(item.geojson);
                this.layers.pushLayer(new GeoJSON(geojson), item.filename);
            }
            catch (e) {
                console.error(e);
            }
        }
    }
    ngOnInit() {
    }
};
FileExplorerViewerComponent = __decorate([
    Component({
        selector: 'fluke-file-explorer-viewer',
        templateUrl: './file-explorer-viewer.component.html',
        styleUrls: ['./file-explorer-viewer.component.scss'],
    })
], FileExplorerViewerComponent);
export { FileExplorerViewerComponent };
//# sourceMappingURL=file-explorer-viewer.component.js.map