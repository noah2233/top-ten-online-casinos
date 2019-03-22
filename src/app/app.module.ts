import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, RootReducer, INITAL_STATE } from './state/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
})
export class AppModule {
  constructor(_ngRedux: NgRedux<IAppState>) {
    _ngRedux.configureStore(RootReducer, INITAL_STATE);
  }
}
