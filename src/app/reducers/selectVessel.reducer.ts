import { createReducer, on } from '@ngrx/store';
import { VesselForChartAction } from '../actions/selectVessel.actions';

export interface VesselForChart { vesselId: number, componentId: string }
export const initialState: VesselForChart = { vesselId: 0, componentId: '' };

export const selectVesselStateReducer = createReducer(
  initialState,
  on(VesselForChartAction, (state, { vesselId, componentId }) =>
    ({ vesselId, componentId }))
);
