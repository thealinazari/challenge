import { ObjType } from '../../../core/types/obj.type';
import { DashChartComponent } from '../components/dash-chart/dash-chart.component';
import { DashFormComponent } from '../components/dash-form/dash-form.component';
import { DashTableComponent } from '../components/dash-table/dash-table.component';
import { DashCompType } from '../types/dashComp.type';
import DashChartData from './dataModels/dashChartData.model';
import DashFormData from './dataModels/dashFormData.model';
import DashTableData from './dataModels/dashTableData.model';

class DashComponent {
  constructor(obj: ObjType) {
    this.id = obj.id;
    this.title = obj.title;
    this.type = obj.type;

    this.data = this.generateData(obj.data);
  }

  id: number;
  title: string;
  type: DashCompType;
  data: DashFormData | DashTableData | DashChartData;

  get viewComponent() {
    if (this.type === 'form') return DashFormComponent;
    if (this.type === 'chart') return DashChartComponent;
    if (this.type === 'table') return DashTableComponent;

    return null;
  }

  private generateData(data: ObjType) {
    if (this.type === 'chart') return new DashChartData(data);
    if (this.type === 'form') return new DashFormData(data);
    if (this.type === 'table') return new DashTableData(data);

    return data;
  }
}

export default DashComponent;
