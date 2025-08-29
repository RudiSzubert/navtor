import { createReducer, on } from '@ngrx/store';
import * as ChartActions from '../actions/chart.actions';
import * as Highcharts from 'highcharts';

export const initialState: Highcharts.SeriesOptionsType[] = [];

export const chartReducer = createReducer(
  initialState,
  on(ChartActions.createSeries, (state) => ({ ...state })),
  on(ChartActions.seriesCreated, (state, { series }) => series)
);
