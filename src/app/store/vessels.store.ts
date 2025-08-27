import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchVessels } from '../actions/vessels.actions';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

export const vesselsValues = {
  vessels: 'vessels'
}

export const vesselsResolver: ResolveFn<void> = (): void => {
  const store = inject(Store);
  store.dispatch(fetchVessels());
}
export const registerAgGrid: ResolveFn<void> = (): void => {
  ModuleRegistry.registerModules([ AllCommunityModule ]);
}


