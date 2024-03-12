import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { UserMenuComponent } from './components/header/user-menu/user-menu.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
