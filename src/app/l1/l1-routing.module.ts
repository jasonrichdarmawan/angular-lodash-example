import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { L1Component } from './l1.component';

const routes: Routes = [
  {
    path: '',
    component: L1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L1RoutingModule { }
