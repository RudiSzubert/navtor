import { Component, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Highcharts from 'highcharts';
import { Dropdown } from '../dropdown/dropdown';

@Component({
  selector: 'app-emissions',
  imports: [
    Dropdown
  ],
  templateUrl: './emissions.html',
  styleUrl: './emissions.scss',
})
export class EmissionsComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    this.store.pipe(select(state => state.series)).subscribe(series => {
      // @ts-ignore I have no idea why this throws errors
      this.chart = Highcharts.chart('highchart-wrapper', {
        chart: {
          zooming: { type: 'xy' },
        },
        title: { text: '' },
        xAxis: { type: 'datetime' },
        yAxis: [{ title: { text: 'other gases' }, opposite: true }, { title: { text: 'CO₂ scale' } }],
        series: series
      });
    })
  }
}
