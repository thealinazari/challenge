import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoldenLayout } from 'golden-layout';
import { lastValueFrom, map } from 'rxjs';

import interactJs from '../../../../core/models/interactjs/intractjs.model';
import { DashFormComponent } from '../../components/dash-form/dash-form.component';
import Dashboard from '../../models/dashboard.model';
import { DashboardService } from '../../services/dashboard-service/dashboard.service';
import { ObjType } from '../../../../core/types/obj.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private dashboardService = inject(DashboardService);
  private route = inject(ActivatedRoute);
  private viewContainer = inject(ViewContainerRef);

  layout: GoldenLayout | null = null;
  dashboard: Dashboard | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      if (this.layout) this.layout.destroy();

      this.getData(res.name);
    });
  }

  ngOnDestroy(): void {
    if (this.layout) this.layout.destroy();
  }

  private async getData(dashName: string) {
    await lastValueFrom(
      this.dashboardService.getDashboardData(dashName).pipe(
        map((res) => {
          this.dashboard = res;

          this.goldenInit();
        })
      )
    );
  }

  private goldenInit() {
    const config: ObjType = {
      content: [
        {
          type: 'stack',
          content: this.dashboard?.comps.map((obj) => ({
            type: 'component',
            componentName: obj.title,
          })),
        },
      ],
    };

    this.layout = new GoldenLayout(
      config as any,
      document.getElementById('layoutContainer') as any
    );

    this.dashboard?.comps.forEach((comp) => {
      this.layout?.registerComponent(comp.title, (container, state) => {
        let compRef = this.viewContainer.createComponent(
          comp.viewComponent as any
        );

        compRef.setInput('data', comp.data);
        container.getElement().append(compRef.location.nativeElement);
      });
    });

    this.layout.init();
  }
}
