import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const DashboardRoutes: Routes = [
  {
    path: ':name',
    component: DashboardComponent,
  },
];

export default DashboardRoutes;
