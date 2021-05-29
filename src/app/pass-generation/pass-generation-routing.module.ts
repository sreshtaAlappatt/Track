import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassGenerationPage } from './pass-generation.page';

const routes: Routes = [
  {
    path: '',
    component: PassGenerationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassGenerationPageRoutingModule {}
