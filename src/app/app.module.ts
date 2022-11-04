import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableInfiniteModule } from './mat-table-infinite/mat-table-infinite.module';
import { PicCardModule } from './pic-card/pic-card.module';
import { MatSharedModule } from './shared/mat-shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSharedModule,
    PicCardModule,
    MatTableInfiniteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSharedModule,
    PicCardModule,
    MatTableInfiniteModule
  ]
})
export class AppModule { }
