import { TestBed } from '@angular/core/testing';
import { VesselEmissionsEffects } from './vessel-emissions.effect';


describe('VesselEmissionsEffects', () => {
  let service: VesselEmissionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VesselEmissionsEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
