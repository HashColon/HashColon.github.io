import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapViewerComponent } from '@fluke/map-viewer/map-viewer.component';
const FlukeSharpRoutes = [
    // {
    //   path: 'viewer',
    //   children: [
    //     { path: '**', component: LeafletViewerComponent }
    //   ]
    // },
    { path: 'flukesharp', component: MapViewerComponent }
];
let FlukeSharpRoutingModule = class FlukeSharpRoutingModule {
};
FlukeSharpRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(FlukeSharpRoutes)
        ],
        exports: [RouterModule]
    })
], FlukeSharpRoutingModule);
export { FlukeSharpRoutingModule };
//# sourceMappingURL=flukesharp.routing.module.js.map