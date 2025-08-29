import { inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, map, Observable, of, withLatestFrom } from 'rxjs';
import { EmissionsResponse } from '../interfaces/emission';
import { Vessel } from '../interfaces/vessel';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { matchVesselsActionsNames } from '../actions/matchVessels.actions';
import { fetchEmissionsSuccess } from '../actions/emissions.actions';

export class VesselEmissionsEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  matchVessels$: Observable<{ type: string, matchedVessels: Vessel[] }> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchEmissionsSuccess),
      withLatestFrom(this.store.pipe(select(state => state.vessels))),
      exhaustMap(args => this.matchVessels(args)
        .pipe(
          map(vessels => ({ type: matchVesselsActionsNames.matched, matchedVessels: vessels })),
          catchError(() => EMPTY)
        ))
    );
  });

  private matchVessels([emissions, vessels]: [{ emissions: EmissionsResponse[] }, Vessel[] ]): Observable<Vessel[]> {
    const matchedVessels = emissions.emissions.map((e: EmissionsResponse) => vessels.find((v: Vessel) => v.id === e.id));
    return of(matchedVessels as Vessel[]);
  }
}
