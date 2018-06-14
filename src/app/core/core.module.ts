import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AffiliatesComponent } from '../affiliates/affiliates.component';
import { TurnoverComponent } from '../turnover/turnover.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    ProfileComponent,
    AffiliatesComponent,
    TurnoverComponent,
    AsideLeftComponent
],
  exports: [
    RouterModule,
  ]
})
export class CoreModule { }
