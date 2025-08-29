import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchEmissions } from '../actions/emissions.actions';
import { take } from 'rxjs';

export const emissionsResolver: ResolveFn<void> = (): void => {
  const store = inject(Store);
  store.pipe(select(state => state.emissions), take(1))
    .subscribe((emissions) => {
      if (!emissions.length) {
        store.dispatch(fetchEmissions());
      }
  });
}
