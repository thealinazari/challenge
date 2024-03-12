import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { ApiRequestInterface } from '../../interfaces/apiRequest.interface';
import ApiRequestOptions from './../../models/http/apiRequestOptions.model';
import { HttpService } from './../http-service/http.service';
import { HttpResponse } from '@angular/common/http';
import { ObjType } from '../../types/obj.type';

@Injectable({
  providedIn: 'root',
})
export class MainHttpService {
  private http = inject(HttpService);
  private router = inject(Router);

  mainGet(paths: string[], IRequestOptions?: ApiRequestInterface) {
    const requestOptions = new ApiRequestOptions(paths, IRequestOptions);

    return this.http.get(requestOptions).pipe(
      map((res) => {
        return res;
      })
    ) as Observable<HttpResponse<ObjType>>;
  }

  mainPost(paths: string[], IRequestOptions?: ApiRequestInterface) {
    const requestOptions = new ApiRequestOptions(paths, IRequestOptions);

    return this.http.post(requestOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }

  mainDelete(paths: string[], IRequestOptions?: ApiRequestInterface) {
    const requestOptions = new ApiRequestOptions(paths, IRequestOptions);

    return this.http.delete(requestOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }

  mainPut(paths: string[], IRequestOptions?: ApiRequestInterface) {
    const requestOptions = new ApiRequestOptions(paths, IRequestOptions);

    return this.http.put(requestOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
