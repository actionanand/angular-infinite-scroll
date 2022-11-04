import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableInfiniteModule } from './mat-table-infinite/mat-table-infinite.module';
import { PicCardModule } from './pic-card/pic-card.module';
import { MatSharedModule } from './shared/mat-shared.module';
import { LayoutComponent } from './layout/layout.component';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSharedModule,
    PicCardModule,
    MatTableInfiniteModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSharedModule,
    PicCardModule,
    MatTableInfiniteModule,
    NavigationModule
  ]
})
export class AppModule { }
