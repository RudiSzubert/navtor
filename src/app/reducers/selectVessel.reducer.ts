import { createReducer, on } from '@ngrx/store';
import * as SelectVesselActions from '../actions/selectVessel.actions';

export const initialState: number = 0;

export const selectVesselStateReducer = createReducer(
  initialState,
  on(SelectVesselActions.vesselSelected, (state, { vehicleId }) => vehicleId)
);
