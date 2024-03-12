import { ApiRequestInterface } from '../../interfaces/apiRequest.interface';
import { ObjType } from '../../types/obj.type';

export default class ApiRequestOptions {
  constructor(urlPaths: string[], options: ApiRequestInterface | undefined) {
    this.body = options?.body ?? {};
    this.headers = options?.headers ?? {};
    this.params = options?.params ?? {};

    this.apiUrl = options?.apiUrl ?? 'api/';

    this.observe = options?.observe ?? 'response';
    this.responseType = options?.responseType;
    this.reportProgress = options?.reportProgress;
    this.withCredentials = options?.withCredentials;

    this.resToastr = options?.resToastr ?? false;

    this.url = this.urlGenerator(urlPaths ?? []);
  }

  url: string;
  headers: ObjType;
  params: ObjType;
  body: ObjType;
  apiUrl: string;

  resToastr: boolean;

  observe: 'body' | 'events' | 'response' | undefined;
  responseType: 'arraybuffer' | 'blob' | 'json' | 'text' | undefined;
  reportProgress: boolean | undefined;
  withCredentials: boolean | undefined;

  private urlGenerator(paths: string[]): string {
    const pathArray: string[] = [...paths];

    return this.apiUrl + pathArray.join('/');
  }
}
