import { __decorate } from "tslib";
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FlukeSharpMessageType } from '@fluke/services/flukesharp-message';
import { EventEmitter } from 'events';
let BackendConnectorService = class BackendConnectorService {
    constructor(
    //public http: HttpClient
    ) {
        this.socketReadyEvent = new EventEmitter();
        this.messageList = [];
        this.isSocketReady = false;
        this.address = '';
        //this.connectBackend("");
    }
    connectBackend(address) {
        if (!this.isSocketReady || this.address != address) {
            this.address = address;
            this.ws = new WebSocket("wss://" + address);
            console.log('socket connection trial');
            this.ws.onopen = event => {
                this.isSocketReady = true;
                this.socketReadyEvent.emit("socketready");
            };
            this.ws.onclose = event => {
                this.isSocketReady = false;
                this.socketReadyEvent.emit("socketclosed");
            };
        }
    }
    generateKey() {
        var genkey;
        do {
            genkey = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        } while (genkey in this.messageList);
        return genkey;
    }
    removeKey() { }
    getConnector() {
        return new Observable((observer) => {
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.error(event);
            this.ws.onclose = (event) => observer.complete();
        });
    }
    sendMessage(msg) {
        if (this.isSocketReady) {
            this.ws.send(JSON.stringify(msg));
            this.messageList[msg.messageKey] = msg;
            return msg.messageKey;
        }
        else
            return "";
    }
    // getGeoJson(filepath: string): Observable<any> {
    //   return this.http.get(filepath);
    // }
    requestGeoJsons(filepaths) {
        if (this.isSocketReady) {
            var msg = {
                messageType: FlukeSharpMessageType.req_geojson,
                messageKey: this.generateKey(),
                messageContent: {
                    filepaths: filepaths
                }
            };
            return this.sendMessage(msg);
        }
        else
            return "";
    }
    requestFileList(root, extension, recursive = false, options) {
        if (this.isSocketReady) {
            var msg = {
                messageType: FlukeSharpMessageType.req_filelist,
                messageKey: this.generateKey(),
                messageContent: {
                    root: root,
                    extension: extension,
                    recursive: recursive,
                    globoptions: options
                }
            };
            return this.sendMessage(msg);
        }
        else
            return "";
    }
    requestDirList(root) {
        if (this.isSocketReady) {
            var msg = {
                messageType: FlukeSharpMessageType.req_dirlist,
                messageKey: this.generateKey(),
                messageContent: { root: root }
            };
            return this.sendMessage(msg);
        }
        else
            return "";
    }
    runBashCommand() { }
};
__decorate([
    Output()
], BackendConnectorService.prototype, "socketReadyEvent", void 0);
BackendConnectorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BackendConnectorService);
export { BackendConnectorService };
//# sourceMappingURL=backend-connector.service.js.map