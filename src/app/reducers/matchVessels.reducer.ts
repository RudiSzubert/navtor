import { createReducer, on } from '@ngrx/store';
import * as DropdownActions from '../actions/matchVessels.actions';
import { Vessel } from '../interfaces/vessel';

export const initialState: Vessel[] = [];

export const matchVesselsReducer = createReducer(
  initialState,
  on(DropdownActions.match, (state) => ({ ...state })),
  on(DropdownActions.matched, (state, { matchedVessels }) => matchedVessels)
);
