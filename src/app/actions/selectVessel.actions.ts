import { createAction, props } from '@ngrx/store';

export const selectActionsNames = {
  vesselSelected: '[Select] vessel selected',
};

export const vesselSelected =
  createAction(selectActionsNames.vesselSelected, props<{ vehicleId: number }>());

