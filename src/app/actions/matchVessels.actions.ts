import { createAction, props } from '@ngrx/store';
import { Vessel } from '../interfaces/vessel';

export const matchVesselsActionsNames = {
  match: '[Dropdown] Match Vessels with Emissions',
  matched: '[Dropdown] Match Vessels with Emissions Completed'
};

export const match =
  createAction(matchVesselsActionsNames.match);
export const matched =
  createAction(matchVesselsActionsNames.matched, props<{ matchedVessels: Vessel[] }>());

