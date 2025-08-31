import { createAction, props } from '@ngrx/store';

export const VesselForChartActionName = '[Select] vessel for chart selected';

export const VesselForChartAction =
  createAction(VesselForChartActionName, props<{ vesselId: number, componentId: string }>());

