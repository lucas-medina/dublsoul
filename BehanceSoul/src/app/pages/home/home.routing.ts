import { HerobannerComponent } from './../../components/herobanner/herobanner.component';
import { CoreModule } from './../../@core/core.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    HerobannerComponent
  ],
  providers: []
})
export class HomeRoutingModule { }
