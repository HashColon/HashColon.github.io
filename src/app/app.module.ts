import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@HashColon/material.module';
import { FlukeSharpModule } from '@fluke/flukesharp.module';
import { FlukeSharpRoutingModule } from '@fluke/flukesharp.routing.module';
import { BlogModule } from '@HashColon/blog/blog.module';
import { BlogRoutingModule } from '@HashColon/blog/blog-routing.module';
import { HomeComponent } from './home/home.component';

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    FlukeSharpModule, FlukeSharpRoutingModule,
    BlogModule, BlogRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
