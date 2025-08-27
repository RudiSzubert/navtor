import { createAction, props } from '@ngrx/store';
import { Vessel } from '../interfaces/vessel';

export const vesselsActionsNames = {
  fetch: '[Vessels] Fetch Vessels',
  fetchSuccess: '[Vessels] Fetch Vessels Success'
}

export const fetchVessels = createAction(vesselsActionsNames.fetch);
export const fetchVesselsSuccess =
  createAction(vesselsActionsNames.fetchSuccess, props<{ vessels: Vessel[] }>());
