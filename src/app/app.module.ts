import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { AppComponent } from './app.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { LightboxModule } from 'angular2-lightbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgMasonryGridModule,
    LightboxModule
  ],
  providers: [
  	ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
