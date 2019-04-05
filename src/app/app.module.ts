import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// core
import { SiteHeaderComponent } from './shared/site-header/site-header.component';

// pages
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
})
export class AppModule {
}
