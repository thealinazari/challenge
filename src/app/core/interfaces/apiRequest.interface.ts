import { ObjType } from '../types/obj.type';

export interface ApiRequestInterface {
  headers?: ObjType;
  params?: ObjType;
  body?: ObjType;
  sendAuthToken?: boolean;
  apiUrl?: string;

  observe?: 'body' | 'events' | 'response';
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  reportProgress?: boolean;
  withCredentials?: boolean;
  resToastr?: boolean;
  successToastr?: string;
  failedToastr?: string;
}
