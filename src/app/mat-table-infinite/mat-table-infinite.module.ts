import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableInfiniteComponent } from './mat-table-infinite.component';
import { MatSharedModule } from '../shared/mat-shared.module';



@NgModule({
  declarations: [
    MatTableInfiniteComponent
  ],
  imports: [
    CommonModule,
    MatSharedModule
  ]
})
export class MatTableInfiniteModule { }
