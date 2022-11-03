import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicCardComponent } from './pic-card.component';
import { MatSharedModule } from '../shared/mat-shared.module';


@NgModule({
  declarations: [
    PicCardComponent
  ],
  imports: [
    CommonModule,
    MatSharedModule
  ],
  exports: [
  ]
})
export class PicCardModule { }
