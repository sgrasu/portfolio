import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { AppComponent } from './app.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { LightboxModule } from 'angular2-lightbox';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotopageComponent } from './photopage/photopage.component';
import { RouterModule, Routes } from '@angular/router'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {path: 'photography', component: PhotopageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhotopageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
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
