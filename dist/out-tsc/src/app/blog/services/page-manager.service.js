import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PageManagerService = class PageManagerService {
    constructor(http) {
        this.http = http;
    }
    getHTML(filepath) {
        return this.http.get(filepath, { responseType: 'text' });
    }
};
PageManagerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PageManagerService);
export { PageManagerService };
//# sourceMappingURL=page-manager.service.js.map