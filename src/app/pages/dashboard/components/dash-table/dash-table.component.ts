import { Component, Input } from '@angular/core';
import DashComponent from '../../models/dashComponent.model';
import DashTableData from '../../models/dataModels/dashTableData.model';

@Component({
  selector: 'app-dash-table',
  templateUrl: './dash-table.component.html',
  styleUrl: './dash-table.component.scss',
})
export class DashTableComponent {
  @Input('data') data!: DashTableData;
}
