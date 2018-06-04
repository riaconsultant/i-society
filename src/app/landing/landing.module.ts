import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [
    LandingRoutingModule,
    CommonModule,
    LandingRoutingModule
  ],
  providers:[]
})
export class LandingModule { }
