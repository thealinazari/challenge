import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import PagesRouting from './../../pages/pages.routing';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: PagesRouting },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
