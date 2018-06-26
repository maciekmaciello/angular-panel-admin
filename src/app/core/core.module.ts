import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TurnoverComponent } from '../turnover/turnover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatementComponent } from '../statement/statement.component';
import { ListComponent } from '../list/list.component';
import { PromoComponent } from '../promo/promo.component';
import { HeaderComponent } from './header/header.component';
import { NavBreadcrumbsComponent } from './nav-breadcrumbs/nav-breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { AffiliatesComponent } from '../affiliates/affiliates.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    AffiliatesComponent,
    StatementComponent,
    DashboardComponent,
    ProfileComponent,
    TurnoverComponent,
    ListComponent,
    PromoComponent,
    HeaderComponent,
    NavBreadcrumbsComponent,
    FooterComponent,
    AsideLeftComponent,
  ],
  exports: [RouterModule]
})
export class CoreModule { }
