import { InputTypes } from '../types/inputTypes.type';

export interface DashFormInput {
  id: string;
  label: string;
  type: InputTypes;
  description?: string;
}
