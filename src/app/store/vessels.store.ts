import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchVessels } from '../actions/vessels.actions';

export const vesselsValues = {
  vessels: 'vessels'
}

export const vesselsResolver: ResolveFn<void> = (): void => {
  const store = inject(Store);
  store.dispatch(fetchVessels());
}
