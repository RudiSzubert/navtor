import { createAction, props } from '@ngrx/store';
import * as Highcharts from 'highcharts';

export const chartActionsNames = {
  seriesCreated: '[Chart] created series',
};

export const seriesCreated =
  createAction(chartActionsNames.seriesCreated, props<{ series: Highcharts.SeriesOptionsType[] }>());

