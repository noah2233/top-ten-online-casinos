import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';
const routes: Routes = [
  // { path: '', redirectTo: pages.test, pathMatch: 'full' },
  // { path: pages.test, component: TestComponent },
  // { path: '**', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
