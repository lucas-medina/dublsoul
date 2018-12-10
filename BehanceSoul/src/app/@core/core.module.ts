import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderDiscoveryMenuComponent } from './../components/header-discovery-menu/header-discovery-menu.component';
import { HeaderLogoComponent } from './../components/header-logo/header-logo.component';
import { HeaderSignupBlockComponent } from './../components/header-signup-block/header-signup-block.component';
import { HeaderUserMenuComponent } from './../components/header-user-menu/header-user-menu.component';
import { HeaderComponent } from './../components/header/header.component';
import { HomeTemplateComponent } from './components/home-template/home-template.component';
import { HerobannerDirective } from './directives/herobanner.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderDiscoveryMenuComponent,
    HeaderUserMenuComponent,
    HeaderSignupBlockComponent,
    HomeTemplateComponent,
    HerobannerDirective
  ],
  exports: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderDiscoveryMenuComponent,
    HeaderUserMenuComponent,
    HeaderSignupBlockComponent,
    HomeTemplateComponent,
    CommonModule
  ]
})
export class CoreModule { }
