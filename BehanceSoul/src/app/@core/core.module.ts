import { HeaderUserMenuComponent } from './../components/header-user-menu/header-user-menu.component';
import { HeaderDiscoveryMenuComponent } from './../components/header-discovery-menu/header-discovery-menu.component';
import { HeaderLogoComponent } from './../components/header-logo/header-logo.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './../components/header/header.component';
import { HomeTemplateComponent } from './components/home-template/home-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderDiscoveryMenuComponent,
    HeaderUserMenuComponent,
    HomeTemplateComponent
  ],
  exports: [
    HeaderComponent,
    HeaderLogoComponent,
    HomeTemplateComponent,
    CommonModule
  ]
})
export class CoreModule { }
