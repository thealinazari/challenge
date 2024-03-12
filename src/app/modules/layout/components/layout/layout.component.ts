import { Component, OnInit, inject } from '@angular/core';
import LayoutUtil from '../../../../core/utilities/layout.util';
import { MainService } from '../../../../core/services/main-service/main.service';
import { lastValueFrom, map } from 'rxjs';
import Dashboard from '../../../../pages/dashboard/models/dashboard.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  private mainService = inject(MainService);
  layoutUtil = LayoutUtil;

  dashboards: Dashboard[] = [];

  ngOnInit(): void {
    lastValueFrom(
      this.mainService.getDashboards().pipe(
        map((res) => {
          this.dashboards = res;
        })
      )
    );
  }
}
