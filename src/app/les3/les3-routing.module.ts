import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Les3Component } from './les3.component';

const routes: Routes = [
  {
    path: '',
    component: Les3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Les3RoutingModule { }
