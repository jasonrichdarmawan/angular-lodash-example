import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Les3RoutingModule } from './les3-routing.module';
import { Les3Component } from './les3.component';


@NgModule({
  declarations: [
    Les3Component
  ],
  imports: [
    CommonModule,
    Les3RoutingModule
  ]
})
export class Les3Module { }
