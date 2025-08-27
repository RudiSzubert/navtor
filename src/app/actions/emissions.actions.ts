import { createAction, props } from '@ngrx/store';
import { EmissionsResponse } from '../interfaces/emission';

export const emissionsActionsNames = {
  fetch: '[Emissions] Fetch Emissions',
  fetchSuccess: '[Emissions] Fetch Emissions Success'
}

export const fetchEmissions = createAction(emissionsActionsNames.fetch);
export const fetchEmissionsSuccess =
  createAction(emissionsActionsNames.fetchSuccess, props<{ emissions: EmissionsResponse[] }>());
