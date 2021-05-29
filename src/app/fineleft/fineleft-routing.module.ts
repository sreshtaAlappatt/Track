import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FineleftPage } from './fineleft.page';

const routes: Routes = [
  {
    path: '',
    component: FineleftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FineleftPageRoutingModule {}
