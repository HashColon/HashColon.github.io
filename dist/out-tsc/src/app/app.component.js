import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as mds from '@HashColon/hashcolon-modulelist';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'HashColon.github.io';
        this.moduleList = mds.moduleList;
    }
    _navigateTo(item) {
        if (typeof item == 'string') {
            this.router.navigate([item]);
        }
        else if (item.link) {
            this.router.navigate([item.link]);
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map