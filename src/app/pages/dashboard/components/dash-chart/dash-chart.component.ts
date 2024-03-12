import { Component, Input, NgZone, PLATFORM_ID, inject } from '@angular/core';
import DashChartData from '../../models/dataModels/dashChartData.model';
import { Legend, Root } from '@amcharts/amcharts5';
import { isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { AxisRendererY } from '@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererY';
import { ValueAxis } from '@amcharts/amcharts5/.internal/charts/xy/axes/ValueAxis';
import { XYChart } from '@amcharts/amcharts5/.internal/charts/xy/XYChart';
import { CategoryAxis } from '@amcharts/amcharts5/.internal/charts/xy/axes/CategoryAxis';
import { AxisRendererX } from '@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererX';
import { ColumnSeries } from '@amcharts/amcharts5/.internal/charts/xy/series/ColumnSeries';
import { XYCursor } from '@amcharts/amcharts5/.internal/charts/xy/XYCursor';

@Component({
  selector: 'app-dash-chart',
  templateUrl: './dash-chart.component.html',
  styleUrl: './dash-chart.component.scss',
})
export class DashChartComponent {
  @Input('data') data!: DashChartData;

  chartRoot: Root | null = null;

  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = Root.new('chartContainer');

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout,
        })
      );

      // Define data
      let data = [
        {
          category: 'Research',
          value1: 1000,
          value2: 588,
        },
        {
          category: 'Marketing',
          value1: 1200,
          value2: 1800,
        },
        {
          category: 'Sales',
          value1: 850,
          value2: 1230,
        },
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        ValueAxis.new(root, {
          renderer: AxisRendererY.new(root, {}),
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        CategoryAxis.new(root, {
          renderer: AxisRendererX.new(root, {}),
          categoryField: 'category',
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value1',
          categoryXField: 'category',
        })
      );
      series1.data.setAll(data);

      let series2 = chart.series.push(
        ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value2',
          categoryXField: 'category',
        })
      );
      series2.data.setAll(data);

      // Add legend
      let legend = chart.children.push(Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set('cursor', XYCursor.new(root, {}));

      this.chartRoot = root;
    });
  }

  ngOnDestroy() {
    // Clean up root element when the component is removed
    this.browserOnly(() => {
      if (this.chartRoot) {
        this.chartRoot.dispose();
      }
    });
  }
}
