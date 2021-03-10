import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from '@blog/material.module';
import { BlogModule } from '@blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogRoutingModule } from '@blog/blog-routing.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            BlogModule, BlogRoutingModule,
            MaterialModule,
            BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map