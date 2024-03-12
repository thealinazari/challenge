import { Injectable, inject } from '@angular/core';
import { MainHttpService } from '../../../../core/services/main-http-service/main-http.service';
import { DashApiPaths } from '../../enums/dashApiPaths.enum';
import { map } from 'rxjs';
import Dashboard from '../../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(MainHttpService);

  getDashboardData(dashName: string) {
    return this.http
      .mainGet([DashApiPaths.GetDashboards], {
        params: { title: dashName },
      })
      .pipe(
        map((res) => {
          return res.body && res.body[0] ? new Dashboard(res.body[0]) : null;
        })
      );
  }
}
