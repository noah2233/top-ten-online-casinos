import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';

import { HomeComponent } from '@pages/home/home.component';
import { CasinoReviewsComponent } from '@pages/casino-reviews/casino-reviews.component';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { SlotsComponent } from '@pages/slots/slots.component';
import { BlackjackComponent } from '@pages/blackjack/blackjack.component';
import { RouletteComponent } from '@pages/roulette/roulette.component';
import { LiveCasinoComponent } from '@pages/live-casino/live-casino.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: pages.casinoReviews, component: CasinoReviewsComponent },
  { path: pages.articles, component: ArticlesComponent },
  { path: pages.slots, component: SlotsComponent },
  { path: pages.blackjack, component: BlackjackComponent },
  { path: pages.roulette, component: RouletteComponent },
  { path: pages.liveCasino, component: LiveCasinoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
