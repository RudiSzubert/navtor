import { TestBed } from '@angular/core/testing';
import { VesselEmissionsEffects } from './vessel-emissions.effect';
import { ReplaySubject } from 'rxjs';
import { data as emissions } from '../../app/mocks/emissions.json'
import { data as vessels } from '../../app/mocks/vessels.json'
import { data as matchedVessels } from '../../app/mocks/matchedVessels.json'
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { fetchEmissionsSuccess } from '../actions/emissions.actions';
import { matched } from '../actions/matchVessels.actions';


describe('VesselEmissionsEffects', () => {
  let effect: VesselEmissionsEffects;
  let actions$: ReplaySubject<any> = new ReplaySubject();
  const initialState = { vessels: vessels };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VesselEmissionsEffects,
        provideZonelessChangeDetection(),
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    });
    effect = TestBed.inject(VesselEmissionsEffects);
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('should match proper emissions with vehicles', () => {
    actions$.next(fetchEmissionsSuccess({ emissions: emissions }));

    effect.matchVessels$.subscribe(action => {
      expect(action).toEqual(matched({ matchedVessels: matchedVessels }));
    });
  });
});
