import { AfterViewInit, Component, inject, input, InputSignal } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Highcharts from 'highcharts';
import { Dropdown } from '../dropdown/dropdown';
import { VesselForChartAction } from '../../actions/selectVessel.actions';

@Component({
  selector: 'app-chart',
  imports: [
    Dropdown
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit {
  componentId: InputSignal<string> = input('');
  private store = inject(Store);
  private chart?: Highcharts.Chart;


  ngAfterViewInit(): void {
    this.store.pipe(select(state => state.chartData)).subscribe(chartData => {
      if (chartData?.targetComponentId === this.componentId()) {
        this.chart = Highcharts.chart(chartData.targetComponentId, chartData.options); // save chart reference for ops
      }
    })
  }

  public changeVessel(vesselId: number): void {
    this.store.dispatch(VesselForChartAction({ vesselId: vesselId, componentId: this.componentId() }));
  }
}
