import {
  ApplicationConfig,
  InjectionToken,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../env/environment.development';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { urlInterceptor } from './interceptors/url.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHighcharts } from 'highcharts-angular';
import { vesselsReducer } from './reducers/vessels.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { VesselsEffects } from './effects/vessels.effect';

export const API_URL = new InjectionToken<string>('API_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
      { provide: API_URL, useValue: environment.apiUrl },
    provideHttpClient(withInterceptors([urlInterceptor])),
    provideStore(),
    provideStoreDevtools(),
    provideEffects(),
    provideHighcharts(),
    provideState('vessels', vesselsReducer),
    provideEffects(VesselsEffects)
  ]
};
