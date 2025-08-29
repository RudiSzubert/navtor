import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchEmissions } from '../actions/emissions.actions';
import { take } from 'rxjs';
import { match } from '../actions/matchVessels.actions';
import { VesselEmissionsService } from '../services/vessel-emissions-service';
import { ChartDataService } from '../services/chart-data-service';
import { createSeries } from '../actions/chart.actions';

export const emissionsResolver: ResolveFn<void> = (): void => {
  const store = inject(Store);
  const vesselEmissions = inject(VesselEmissionsService);
  const chartService = inject(ChartDataService);
  store.pipe(select(state => state.emissions), take(1))
    .subscribe((emissions) => {
      if (!emissions.length) {
        store.dispatch(match());
        store.dispatch(createSeries());
        store.dispatch(fetchEmissions());
      }
  });
}
