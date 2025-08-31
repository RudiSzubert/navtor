import { ColDef } from 'ag-grid-community';

export const colDefs: ColDef[] = [
  { field: 'name' },
  { field: 'mmsi' },
  { field: 'imo' },
  { field: 'companyName' },
  { field: 'vesselType' }
];

const chartSeries = [
  { type: 'line', name: 'SOx', yAxis: 0, lineWidth: 1, emission_name: 'sox_emissions' },
  { type: 'line', name: 'NOx', yAxis: 0, lineWidth: 1, emission_name: 'nox_emissions' },
  { type: 'line', name: 'PM', yAxis: 0, lineWidth: 1, emission_name: 'pm_emissions' },
  { type: 'line', name: 'CO₂', yAxis: 1, lineWidth: 3, emission_name: 'co2_emissions' },
  { type: 'line', name: 'CH₄', yAxis: 0, lineWidth: 1, emission_name: 'ch4_emissions' }
];

export const chartOptions = {
  chart: {
    zooming: { type: 'xy' },
  },
  title: { text: '' },
  xAxis: { type: 'datetime' },
  yAxis: [
    { title: { text: 'other gases' }, opposite: true },
    { title: { text: 'CO₂ scale' }}
  ],
  series: chartSeries
}
