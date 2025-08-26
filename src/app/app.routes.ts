import { Routes } from '@angular/router';
import { VesselsComponent } from './components/vessels/vessels';
import { EmissionsComponent } from './components/emissions/emissions';
import { paths } from './configs/paths';

export const routes: Routes = [
  { path: paths.vessels, component: VesselsComponent },
  { path: paths.emissions, component: EmissionsComponent },
];
