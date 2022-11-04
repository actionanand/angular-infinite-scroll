import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const matModule = [
  ScrollingModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  
];


@NgModule({
  declarations: [],
  imports: [
    // Leave This blank
  ],
  exports: [
    ...matModule
  ]
})
export class MatSharedModule { }
