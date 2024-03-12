import { Routes } from '@angular/router';

const PagesRouting: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

export default PagesRouting;
