import { Routes } from '@angular/router';
import { paths } from './configs/paths';
import { provideState } from '@ngrx/store';
import { emissionsReducer } from './reducers/emissions.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmissionsEffects, EmissionsService } from './services/emissions.service';
import { emissionsResolver, emissionsValues } from './store/emissions.store';
import { VesselsEffects, VesselsService } from './services/vessels';
import { registerAgGrid, vesselsResolver, vesselsValues } from './store/vessels.store';
import { vesselsReducer } from './reducers/vessels.reducer';

export const routes: Routes = [
  { path: paths.vessels,
    loadComponent: () => import('./components/vessels/vessels').then(m => m.VesselsComponent),
    providers: [
      VesselsService,
      VesselsEffects,
      provideState(vesselsValues.vessels, vesselsReducer),
      provideEffects(VesselsEffects)
    ],
    resolve: { preload: vesselsResolver, registerAgGrid: registerAgGrid }
  },
  {
    path: paths.emissions,
    loadComponent: () => import('./components/emissions/emissions').then(m => m.EmissionsComponent),
    providers: [
      EmissionsService,
      EmissionsEffects,
      provideState(emissionsValues.emissions, emissionsReducer),
      provideEffects(EmissionsEffects)
    ],
    resolve: { preload: emissionsResolver }
  },
];

