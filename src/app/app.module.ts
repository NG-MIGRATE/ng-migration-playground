import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import {WindowRef} from "./utils/WindowRef";
import {RouterModule} from "@angular/router";
import {StateParams} from "./utils/StateParams";
import {EventService} from "./utils/EventService";

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [WindowRef, StateParams, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
