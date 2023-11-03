import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Les1Component } from './les1.component';

const routes: Routes = [
  {
    path: '',
    component: Les1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Les1RoutingModule { }
