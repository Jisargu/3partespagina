import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';

@NgModule({
  declarations: [
    AppComponent,
    Proyecto1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
