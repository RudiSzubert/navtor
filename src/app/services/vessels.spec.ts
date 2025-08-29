import { TestBed } from '@angular/core/testing';
import { VesselsEffects } from './vessels';


describe('VesselsEffects', () => {
  let service: VesselsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VesselsEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
