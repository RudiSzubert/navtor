import { createReducer, on } from '@ngrx/store';
import * as EmissionsActions from '../actions/emissions.actions';
import { EmissionsResponse } from '../interfaces/emission';

export interface EmissionsState {
  emissions: EmissionsResponse[];
}

export const initialState: EmissionsState = {
  emissions: [],
};

export const emissionsReducer = createReducer(
  initialState,
  on(EmissionsActions.fetchEmissions, (state) => ({ ...state })),
  on(EmissionsActions.fetchEmissionsSuccess, (state, { emissions }) => ({
    ...state,
    emissions,
  }))
);
