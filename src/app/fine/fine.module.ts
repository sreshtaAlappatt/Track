import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinePageRoutingModule } from './fine-routing.module';

import { FinePage } from './fine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinePageRoutingModule
  ],
  declarations: [FinePage]
})
export class FinePageModule {}
