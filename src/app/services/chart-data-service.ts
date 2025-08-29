import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { chartSeries } from '../configs/grid.config';
import { Emission, EmissionsResponse } from '../interfaces/emission';
import { chartActionsNames } from '../actions/chart.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { vesselSelected } from '../actions/selectVessel.actions';

@Injectable()
export class ChartDataService {
  public createSeries([vesselId, emissions]: [{ vesselId: number }, EmissionsResponse[]]) {
    const series = JSON.parse(JSON.stringify(chartSeries));
    const emission: EmissionsResponse = emissions.find((e: EmissionsResponse) => e.id === vesselId.vesselId) as EmissionsResponse;

    series.forEach((item: { data: Array<[string, number]>, emission_name: string }) => {
      item.data = emission.timeSeries.map((elem: Emission) => {
        return [elem.report_from_utc, elem[item.emission_name]];
      })
    })
    return of(series);
  }
}

@Injectable()
export class ChartEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);
  private chartData = inject(ChartDataService);

  createSeries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(vesselSelected),
      withLatestFrom(this.store.pipe(select(state => state.emissions))),
      exhaustMap(args => this.chartData.createSeries(args)
        .pipe(
          map(series => ({ type: chartActionsNames.seriesCreated, series: series })),
          catchError(() => EMPTY)
        ))
    );
  });
}
