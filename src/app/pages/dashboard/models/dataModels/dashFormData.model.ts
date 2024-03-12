import { ObjType } from '../../../../core/types/obj.type';
import { DashFormInput } from '../../interfaces/dashFormInputs.interface';

class DashFormData {
  constructor(obj: ObjType) {
    this.inputs = obj.inputs;
  }

  inputs: DashFormInput[];
}

export default DashFormData;
