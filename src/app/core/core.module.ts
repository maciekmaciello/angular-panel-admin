import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

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
import { MaterialsComponent } from '../affiliates/materials/materials.component';
import { HomeComponent } from '../affiliates/home/home.component';
import { PackagesComponent } from '../affiliates/packages/packages.component';
import { VerifiedComponent } from '../affiliates/verified/verified.component';
import { WithdrawnComponent } from '../affiliates/withdrawn/withdrawn.component';
import { AffiliateDetailComponent } from '../affiliates/affiliate-detail/affiliate-detail.component';
import { ChartComponent } from './chart/chart.component';
import { ManageComponent } from '../affiliates/materials/manage/manage.component';
import { GeneralComponent } from '../turnover/general/general.component';
import { ProfitAffiliateComponent } from '../turnover/profit-affiliate/profit-affiliate.component';
import { CountryComponent } from '../turnover/country/country.component';
import { LastTransactionsComponent } from '../turnover/last-transactions/last-transactions.component';
import { LastListsComponent } from '../list/last-lists/last-lists.component';
import { CurrentListsComponent } from '../list/current-lists/current-lists.component';

import { GeneralService } from '../turnover/general/general.service';
import { LastTransactionsService } from '../turnover/last-transactions/last-transactions.service';
import { LastListsService } from '../list/last-lists/last-lists.service';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    PackagesComponent,
    VerifiedComponent,
    WithdrawnComponent,
    AffiliatesComponent,
    StatementComponent,
    DashboardComponent,
    ProfileComponent,
    MaterialsComponent,
    TurnoverComponent,
    AffiliateDetailComponent,
    ListComponent,
    PromoComponent,
    HeaderComponent,
    NavBreadcrumbsComponent,
    FooterComponent,
    AsideLeftComponent,
    ChartComponent,
    GeneralComponent,
    ProfitAffiliateComponent,
    CountryComponent,
    LastTransactionsComponent,
    ManageComponent,
    LastListsComponent,
    CurrentListsComponent
  ],
  providers: [GeneralService, LastTransactionsService, LastListsService],
  exports: [RouterModule]
})
export class CoreModule { }
