import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pages } from '@core/consts';

import { TestComponent } from '@pages/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: pages.test, component: TestComponent },
  { path: '**', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
