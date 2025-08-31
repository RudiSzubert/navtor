import { createAction, props } from '@ngrx/store';
import { ChartDataCreated } from '../reducers/chart.reducer';

export const chartActionsNames = {
  chartCreated: '[Chart] created series',
  createChart: '[Chart] start creating series',
};

export const chartCreated =
  createAction(chartActionsNames.chartCreated, props<ChartDataCreated>());
export const createChart =
  createAction(chartActionsNames.createChart);

