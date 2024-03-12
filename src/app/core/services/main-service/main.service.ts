import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom, map } from 'rxjs';
import { MainHttpService } from '../main-http-service/main-http.service';

import { ObjType } from '../../types/obj.type';
import { MainApisPath } from '../../enums/mainApisPaths.enum';
import Dashboard from '../../../pages/dashboard/models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  http = inject(MainHttpService);

  getDashboards(): Observable<Dashboard[]> {
    return this.http.mainGet([MainApisPath.Dashboard]).pipe(
      map((res) => {
        return (res.body as ObjType[]).map((obj) => new Dashboard(obj));
      })
    );
  }
}
