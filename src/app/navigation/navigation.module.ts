import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MatSharedModule } from '../shared/mat-shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MatSharedModule
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent
  ]
})
export class NavigationModule { }
