import { Routes } from '@angular/router';
import { paths } from './configs/paths';
import { provideState } from '@ngrx/store';
import { emissionsReducer } from './reducers/emissions.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmissionsEffects, EmissionsService } from './services/emissions.service';
import { emissionsResolver } from './resolvers/emissions.resolver';
import { registerAgGrid } from './resolvers/vessels.resolver';
import { VesselEmissionsEffects, VesselEmissionsService } from './services/vessel-emissions-service';
import { matchVesselsReducer } from './reducers/matchVessels.reducer';
import { ChartDataService, ChartEffects } from './services/chart-data-service';
import { chartReducer } from './reducers/chart.reducer';
import { selectVesselStateReducer } from './reducers/selectVessel.reducer';

export const routes: Routes = [
  { path: paths.vessels,
    loadComponent: () => import('./components/vessels/vessels').then(m => m.VesselsComponent),
    resolve: { registerAgGrid: registerAgGrid }
  },
  {
    path: paths.emissions,
    loadComponent: () => import('./components/emissions/emissions').then(m => m.EmissionsComponent),
    providers: [
      EmissionsService,
      VesselEmissionsService,
      ChartDataService,
      provideState('emissions', emissionsReducer),
      provideState('matchedVessels', matchVesselsReducer),
      provideState('series', chartReducer),
      provideState('vesselId', selectVesselStateReducer),
      provideEffects(EmissionsEffects, ChartEffects, VesselEmissionsEffects)
    ],
    resolve: { preload: emissionsResolver }
  },
];

