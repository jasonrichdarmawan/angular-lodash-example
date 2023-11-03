import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Les2Component } from './les2.component';

const routes: Routes = [
  {
    path: '',
    component: Les2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Les2RoutingModule { }
