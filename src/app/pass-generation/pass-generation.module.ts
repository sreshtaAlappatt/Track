import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassGenerationPageRoutingModule } from './pass-generation-routing.module';

import { PassGenerationPage } from './pass-generation.page';
import { AlertInfoModule } from '../alert-info/alert-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassGenerationPageRoutingModule,
    AlertInfoModule,
  ],
  declarations: [PassGenerationPage]
})
export class PassGenerationPageModule {}
