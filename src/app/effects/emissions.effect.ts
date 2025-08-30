import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { emissionsActionsNames, fetchEmissions } from '../actions/emissions.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { EmissionsService } from '../services/emissions.service';


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
