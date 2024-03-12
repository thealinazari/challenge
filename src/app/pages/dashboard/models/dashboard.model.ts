import { ObjType } from '../../../core/types/obj.type';
import DashComponent from './dashComponent.model';

class Dashboard {
  constructor(obj: ObjType) {
    this.id = obj.id;
    this.title = obj.title;
    this.comps = (obj.comps as ObjType[]).map((obj) => new DashComponent(obj));
  }

  id: number;
  title: string;
  comps: DashComponent[];
}

export default Dashboard;
