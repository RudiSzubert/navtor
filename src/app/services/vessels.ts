import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vessel } from '../interfaces/vessel';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { vesselsActionsNames, fetchVessels } from '../actions/vessels.actions';
import { catchError, EMPTY, exhaustMap, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VesselsService {
  private http = inject(HttpClient);

  public getVessels(): Observable<Vessel[]> {
    return this.http.get<Vessel[]>('/vessels.json');
  }
}

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
