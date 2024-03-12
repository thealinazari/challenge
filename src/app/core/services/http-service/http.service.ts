import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import ApiRequestOptions from '../../models/http/apiRequestOptions.model';
import { ObjType } from '../../types/obj.type';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(options: ApiRequestOptions) {
    return this.http.get<ObjType>(options.url, {
      headers: {
        ...options.headers,
      },
      params: {
        ...options.params,
      },
      observe: 'response',
      responseType: options.responseType as 'json' | undefined,
      reportProgress: options.reportProgress,
      withCredentials: options.withCredentials,
    });
  }

  post(options: ApiRequestOptions) {
    return this.http.post<ObjType>(options.url, options.body, {
      headers: {
        ...options.headers,
      },
      params: {
        ...options.params,
      },
      observe: options.observe as any,
      responseType: options.responseType as 'json' | undefined,
      reportProgress: options.reportProgress,
    });
  }

  delete(options: ApiRequestOptions) {
    return this.http.delete<ObjType>(options.url, {
      headers: {
        ...options.headers,
      },
      params: {
        ...options.params,
      },
      observe: 'response',
      responseType: options.responseType as 'json' | undefined,
      reportProgress: options.reportProgress,
    });
  }

  put(options: ApiRequestOptions) {
    return this.http.put<ObjType>(options.url, options.body, {
      headers: {
        ...options.headers,
      },
      params: {
        ...options.params,
      },
      observe: 'response',
      responseType: options.responseType as 'json' | undefined,
      reportProgress: options.reportProgress,
    });
  }

  patch(options: ApiRequestOptions) {
    return this.http.patch<ObjType>(options.url, options.body, {
      headers: {
        ...options.headers,
      },
      params: {
        ...options.params,
      },
      observe: 'response',
      responseType: options.responseType as 'json' | undefined,
      reportProgress: options.reportProgress,
    });
  }
}
