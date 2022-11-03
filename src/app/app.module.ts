import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    PicCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSharedModule,
    PicCardModule
  ]
})
export class AppModule { }
