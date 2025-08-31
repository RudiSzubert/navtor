import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, map, Observable, of, withLatestFrom } from 'rxjs';
import { chartOptions } from '../configs/grid.config';
import { Emission, EmissionsResponse } from '../interfaces/emission';
import { chartActionsNames } from '../actions/chart.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VesselForChartAction } from '../actions/selectVessel.actions';
import { VesselForChart } from '../reducers/selectVessel.reducer';
import { ChartDataCreated } from '../reducers/chart.reducer';

@Injectable()
export class ChartEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  createChart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VesselForChartAction),
      withLatestFrom(this.store.pipe(select(state => state.emissions))),
      exhaustMap(args => this.createChart(args)
        .pipe(
          map(chartData => ({ type: chartActionsNames.chartCreated, ...chartData })),
          catchError(() => EMPTY)
        ))
    );
  });

  private createChart([data, emissions]: [VesselForChart, EmissionsResponse[]]): Observable<ChartDataCreated> {
      const options = JSON.parse(JSON.stringify(chartOptions));
      const emission: EmissionsResponse = emissions.find((e: EmissionsResponse) => e.id === data.vesselId) as EmissionsResponse;

      options.series.forEach((item: { data: Array<[string, number]>, emission_name: string }) => {
        item.data = emission.timeSeries.map((elem: Emission) => {
          return [elem.report_from_utc, elem[item.emission_name]];
        })
      })
      return of({
        targetComponentId: data.componentId,
        options: options
      } as ChartDataCreated);
  }
}
