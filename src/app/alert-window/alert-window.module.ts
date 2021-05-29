import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertWindowPageRoutingModule } from './alert-window-routing.module';

import { AlertWindowPage } from './alert-window.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertWindowPageRoutingModule
  ],
  declarations: [AlertWindowPage]
})
export class AlertWindowPageModule {}
