import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Les2RoutingModule } from './les2-routing.module';
import { Les2Component } from './les2.component';


@NgModule({
  declarations: [
    Les2Component
  ],
  imports: [
    CommonModule,
    Les2RoutingModule
  ]
})
export class Les2Module { }
