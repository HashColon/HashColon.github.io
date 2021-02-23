import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as mds from '@HashColon/hashcolon-modulelist';
let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.moduleList = mds.moduleList;
    }
    ngOnInit() {
    }
    _navigateTo(card) {
        this.router.navigate([card.link]);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map