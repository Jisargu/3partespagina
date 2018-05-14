import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Proyecto1Component } from './proyecto1/proyecto1.component';
import { BotonesComponent } from './botones/botones.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { ImagenesPoderosasComponent } from './imagenes-poderosas/imagenes-poderosas.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderJessComponent } from './header-jess/header-jess.component';

@NgModule({
  declarations: [
    AppComponent,
    Proyecto1Component
    BotonesComponent

    PopularPostsComponent,
    ImagenesPoderosasComponent,

    FooterComponent,

    HeaderJessComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
