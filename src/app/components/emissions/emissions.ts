import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { emissionsValues } from '../../store/emissions.store';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { chartSeries } from '../../configs/grid.config';
import { Emission } from '../../interfaces/emission';

@Component({
  selector: 'app-emissions',
  imports: [
    HighchartsChartComponent
  ],
  templateUrl: './emissions.html',
  styleUrl: './emissions.scss',
})
export class EmissionsComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private sub: any;

  public chartOptions?: Highcharts.Options;

  ngOnInit() {
    this.sub = this.store.select(emissionsValues.emissions).subscribe((state) => {
      const s = JSON.parse(JSON.stringify(chartSeries));
      const series: Highcharts.SeriesOptionsType[] = [] as unknown as Highcharts.SeriesOptionsType[];
      s.forEach((item: {data: [], emission_name: string}) => {
        item.data = state.emissions[0].timeSeries.map((elem: Emission) => {
          return [elem.report_from_utc, elem[item.emission_name]];
        })
        series.push(item as unknown as Highcharts.SeriesOptionsType);
      })

      if (!this.chartOptions) {
        this.chartOptions = {
          chart: {
            zooming: { type: 'xy' },
          },
          title: { text: 'Example' },
          xAxis: { type: 'datetime' },
          yAxis: [{ title: { text: 'other gases' }, opposite: true }, { title: { text: 'CO₂ scale' } }],
          series: series
        }
      } else {
        // update
      }
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
