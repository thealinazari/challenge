import { Route } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';

export const ErrorsRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '404',
  },
  {
    path: '404',
    component: Error404Component,
  },
];
