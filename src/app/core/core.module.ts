import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
  ],
  exports: [
    RouterModule,
  ]
})
export class CoreModule { }
