import { createReducer, on } from '@ngrx/store';
import * as DropdownActions from '../actions/matchVessels.actions';
import { Vessel } from '../interfaces/vessel';

export interface DropdownState {
  matchedVessels: Vessel[];
}

export const initialState: DropdownState = {
  matchedVessels: [],
};

export const matchVesselsReducer = createReducer(
  initialState,
  on(DropdownActions.match, (state) => ({ ...state })),
  on(DropdownActions.matched, (state, { matchedVessels }) => ({
    ...state,
    matchedVessels,
  }))
);
