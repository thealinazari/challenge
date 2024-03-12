import { Component, Input } from '@angular/core';
import Dashboard from '../../../../pages/dashboard/models/dashboard.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  @Input('dashboards') dashboards: Dashboard[] = [];
}
