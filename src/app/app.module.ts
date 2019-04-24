import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EllipsisModule } from 'ngx-ellipsis';
import { ResizableModule } from 'angular-resizable-element';

// core

// shared
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { AllSitesAreComponent } from './shared/all-sites-are/all-sites-are.component';
import { AdvertisingDisclosureComponent } from './shared/advertising-disclosure/advertising-disclosure.component';

// top ten
import { TopTenComponent } from './top-ten/top-ten.component';
import { TopTenMenuComponent } from './top-ten/top-ten-menu/top-ten-menu.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { CasinoReviewsComponent } from './pages/casino-reviews/casino-reviews.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { BlackjackComponent } from './pages/blackjack/blackjack.component';
import { RouletteComponent } from './pages/roulette/roulette.component';
import { LiveCasinoComponent } from './pages/live-casino/live-casino.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    CasinoReviewsComponent,
    ArticlesComponent,
    SlotsComponent,
    BlackjackComponent,
    RouletteComponent,
    LiveCasinoComponent,
    TopTenComponent,
    AllSitesAreComponent,
    AdvertisingDisclosureComponent,
    TopTenMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    EllipsisModule,
    ResizableModule
  ],
  providers: [],
})
export class AppModule {
}
