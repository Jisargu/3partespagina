import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { ImagenesPoderosasComponent } from './imagenes-poderosas/imagenes-poderosas.component';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,

    PopularPostsComponent,
    ImagenesPoderosasComponent,

    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
