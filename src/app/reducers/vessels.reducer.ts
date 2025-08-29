import { createReducer, on } from '@ngrx/store';
import * as VesselsActions from '../actions/vessels.actions';
import { Vessel } from '../interfaces/vessel';

export const initialState: Vessel[] = [];

export const vesselsReducer = createReducer(
  initialState,
  on(VesselsActions.fetchVessels, (state) => ({ ...state })),
  on(VesselsActions.fetchVesselsSuccess, (state, { vessels }) => vessels)
);
