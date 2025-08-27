import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchEmissions } from '../actions/emissions.actions';

export const values = {
  emissions: 'emissions'
}

export const emissionsResolver: ResolveFn<void> = (): void => {
  const store = inject(Store);
  store.dispatch(fetchEmissions())
}
