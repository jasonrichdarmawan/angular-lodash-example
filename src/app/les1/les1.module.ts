import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Les1RoutingModule } from './les1-routing.module';
import { Les1Component } from './les1.component';


@NgModule({
  declarations: [
    Les1Component
  ],
  imports: [
    CommonModule,
    Les1RoutingModule
  ]
})
export class Les1Module { }
