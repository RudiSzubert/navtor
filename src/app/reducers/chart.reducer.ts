import { createReducer, on } from '@ngrx/store';
import * as ChartActions from '../actions/chart.actions';
import * as Highcharts from 'highcharts';


export interface ChartDataCreated {
  targetComponentId: string;
  options?: Highcharts.Options;
}
export const initialState: ChartDataCreated = { targetComponentId: '' };

export const chartReducer = createReducer(
  initialState,
  on(ChartActions.createChart, (state) => ({ ...state })),
  on(ChartActions.chartCreated, (state, { targetComponentId, options }) =>
    ({ targetComponentId, options }))
);
