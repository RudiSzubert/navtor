import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmissionsResponse } from '../interfaces/emission';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { emissionsActionsNames, fetchEmissions } from '../actions/emissions.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class EmissionsService {
  private http = inject(HttpClient);

  public getEmissions() {
    return this.http.get<EmissionsResponse[]>('/emissions.json');
  }
}

@Injectable()
export class EmissionsEffects {
  private actions$ = inject(Actions);
  private emissionsService = inject(EmissionsService);

  loadEmissions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchEmissions),
      exhaustMap(() => this.emissionsService.getEmissions()
        .pipe(
          map(emissions => ({ type: emissionsActionsNames.fetchSuccess, emissions: emissions })),
          catchError(() => EMPTY)
        ))
    );
  });
}
