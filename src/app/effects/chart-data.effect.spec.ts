import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ChartEffects } from './chart-data.effect';
import { provideZonelessChangeDetection } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { data } from '../../app/mocks/emissions.json'
import { series } from '../../app/mocks/series.json'
import { vesselSelected } from '../actions/selectVessel.actions';
import { seriesCreated } from '../actions/chart.actions';
import * as Highcharts from 'highcharts';

describe('ChartDataEffect', () => {
  let effect: ChartEffects;
  let actions$: ReplaySubject<any> = new ReplaySubject();
  const initialState = { vesselId: 0, emissions: data };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChartEffects,
        provideZonelessChangeDetection(),
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    });
    effect = TestBed.inject(ChartEffects);
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('should find correct vessels', () => {
    actions$.next(vesselSelected({ vesselId: 10002 }));

    effect.createSeries$.subscribe(action => {
      expect(action).toEqual(seriesCreated({ series: series as Highcharts.SeriesOptionsType[] }));
    });
  });
});
