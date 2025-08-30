import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchVessels, vesselsActionsNames } from '../actions/vessels.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { VesselsService } from '../services/vessels';


@Injectable({ providedIn: 'root' })
export class VesselsEffects {
  private actions$ = inject(Actions);
  private vesselsService = inject(VesselsService);

  loadVessels$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchVessels),
      exhaustMap(() => this.vesselsService.getVessels()
        .pipe(
          map(vessels => ({ type: vesselsActionsNames.fetchSuccess, vessels: vessels })),
          catchError(() => EMPTY)
        ))
    );
  });
}
