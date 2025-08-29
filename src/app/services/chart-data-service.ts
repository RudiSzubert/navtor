import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { chartSeries } from '../configs/grid.config';
import { Emission, EmissionsResponse } from '../interfaces/emission';
import { createSeries, seriesCreated } from '../actions/chart.actions';
import { Actions, ofType } from '@ngrx/effects';

@Injectable()
export class ChartDataService {
  private store = inject(Store);
  private actions$ = inject(Actions);

  constructor() {
    this.actions$.pipe(ofType(createSeries), take(1)).subscribe(e => {
      this.startCreatingSeries();
    });
  }

  private startCreatingSeries() {
    this.store.pipe(select(state => state.vehicleId)).subscribe((vehicleId) => {
      if (vehicleId) {
        this.store.pipe(select(state => state.emissions), take(1))
          .subscribe((emissions) => {
            this.createSeries(emissions.find((e: any) => e.id === vehicleId));
          });
      }
    })
  }

  private createSeries(emission: EmissionsResponse) {
    const s = JSON.parse(JSON.stringify(chartSeries));

    s.forEach((item: { data: Array<[string, number]>, emission_name: string }) => {
      item.data = emission.timeSeries.map((elem: Emission) => {
        return [elem.report_from_utc, elem[item.emission_name]];
      })
    })

    this.store.dispatch(seriesCreated({series: s}))
  }
}
