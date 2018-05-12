import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagenesPoderosasComponent } from './imagenes-poderosas/imagenes-poderosas.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesPoderosasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
