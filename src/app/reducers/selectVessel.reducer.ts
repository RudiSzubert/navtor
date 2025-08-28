import { createReducer, on } from '@ngrx/store';
import * as SelectVesselActions from '../actions/selectVessel.actions';

export interface SelectVesselState {
  vehicleId: number;
}

export const initialState: SelectVesselState = {
  vehicleId: 0,
};

export const selectVesselStateReducer = createReducer(
  initialState,
  on(SelectVesselActions.vesselSelected, (state, { vehicleId }) => ({
    ...state,
    vehicleId,
  }))
);
