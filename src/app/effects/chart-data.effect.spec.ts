import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { ChartEffects } from './chart-data.effect';
import { provideZonelessChangeDetection } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';

fdescribe('ChartDataService', () => {
  let service: ChartEffects;
  let actions$: ReplaySubject<any> = new ReplaySubject();
  const initialState = { vesselId: 0, emissions: [] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChartEffects,
        provideZonelessChangeDetection(),
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    });
    service = TestBed.inject(ChartEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find correct vessels', () => {
    expect(service).toBeTruthy();
  });
});
