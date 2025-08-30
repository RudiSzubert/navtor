import { TestBed } from '@angular/core/testing';

import { EmissionsEffects, EmissionsService } from './emissions.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

describe('EmissionsEffects', () => {
  let effect: EmissionsEffects;
  let actions$: ReplaySubject<any> = new ReplaySubject();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmissionsEffects,
        EmissionsService,
        provideMockActions(() => actions$),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    });
    effect = TestBed.inject(EmissionsEffects);
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });
});
