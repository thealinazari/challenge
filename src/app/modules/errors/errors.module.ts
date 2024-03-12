import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Error404Component } from './components/error404/error404.component';
import { ErrorsRoutes } from './errors.routes';

@NgModule({
  declarations: [Error404Component],
  imports: [RouterModule.forChild(ErrorsRoutes)],
})
export class ErrorsModule {}
