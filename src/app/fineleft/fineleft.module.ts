import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FineleftPageRoutingModule } from './fineleft-routing.module';

import { FineleftPage } from './fineleft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FineleftPageRoutingModule
  ],
  declarations: [FineleftPage]
})
export class FineleftPageModule {}
