import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
master
import { ImagenesPoderosasComponent } from './imagenes-poderosas/imagenes-poderosas.component';

import { FooterComponent } from './footer/footer.component';
master

@NgModule({
  declarations: [
    AppComponent,
master
    ImagenesPoderosasComponent,

    FooterComponent,
 master
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
