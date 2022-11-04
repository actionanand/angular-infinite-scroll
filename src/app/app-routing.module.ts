import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PicCardComponent } from './pic-card/pic-card.component';
import { MatTableInfiniteComponent } from './mat-table-infinite/mat-table-infinite.component';

const routes: Routes = [
  { path: '', component: MatTableInfiniteComponent},
  { path: 'infinite-card', component: PicCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
