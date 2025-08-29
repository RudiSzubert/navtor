import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatestAll, of, take } from 'rxjs';
import { EmissionsResponse } from '../interfaces/emission';
import { Vessel } from '../interfaces/vessel';
import { Actions, ofType } from '@ngrx/effects';
import { match, matched } from '../actions/matchVessels.actions';

@Injectable()
export class VesselEmissionsService {
  private store = inject(Store);
  private actions$ = inject(Actions);

  constructor() {
    this.actions$.pipe(ofType(match), take(1)).subscribe(e => {
      this.matchVessels();
    });
  }

  private matchVessels() {
    of(
      this.store.pipe(select(state => state.vessels)),
      this.store.pipe(select(state => state.emissions))
    ).pipe(combineLatestAll()).subscribe(d => {
      if (d[0]?.length && d[1]?.length) {
        const vessels = d[1].map((e: EmissionsResponse) => d[0].find((v: Vessel) => v.id === e.id));
        this.store.dispatch(matched({ matchedVessels: vessels }));
      }
    })
  }
}
