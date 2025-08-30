import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { ReplaySubject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { VesselsEffects } from './vessels.effect';



describe('VesselsEffects', () => {
  let effect: VesselsEffects;
  let actions$: ReplaySubject<any> = new ReplaySubject();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
        provideMockStore({}),
        provideMockActions(() => actions$)
      ]
    });
    effect = TestBed.inject(VesselsEffects);
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('should match proper emissions with vehicles', () => {

  });
});
