import { createReducer, on } from '@ngrx/store';
import * as ChartActions from '../actions/chart.actions';
import * as Highcharts from 'highcharts';

export interface ChartState {
  series: Highcharts.SeriesOptionsType[];
}

export const initialState: ChartState = {
  series: [],
};

export const chartReducer = createReducer(
  initialState,
  on(ChartActions.seriesCreated, (state, { series }) => ({
    ...state,
    series,
  }))
);
