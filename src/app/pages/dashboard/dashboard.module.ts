import { NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import DashboardRoutes from './dashboard.routing';
import { RouterModule } from '@angular/router';
import { DashTableComponent } from './components/dash-table/dash-table.component';
import { DashChartComponent } from './components/dash-chart/dash-chart.component';
import { DashFormComponent } from './components/dash-form/dash-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    DashTableComponent,
    DashChartComponent,
    DashFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
    NgComponentOutlet,
  ],
})
export class DashboardModule {}
