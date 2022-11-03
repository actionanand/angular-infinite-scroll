import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PicCardComponent } from './pic-card/pic-card.component';

const routes: Routes = [
  { path: '', component: PicCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
