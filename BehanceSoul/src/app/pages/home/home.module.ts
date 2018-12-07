import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from './../../@core/core.module';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CoreModule
  ]
})
export class HomeModule { }
