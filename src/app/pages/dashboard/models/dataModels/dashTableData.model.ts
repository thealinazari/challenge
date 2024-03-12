import { ObjType } from '../../../../core/types/obj.type';

class DashTableData {
  constructor(obj: ObjType) {
    this.headers = obj.headers;
    this.rows = obj.rows;
  }

  headers: string[];
  rows: string[][];
}

export default DashTableData;
