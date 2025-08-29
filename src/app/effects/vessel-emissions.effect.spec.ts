import { TestBed } from '@angular/core/testing';

import { VesselEmissionsService } from './vessel-emissions.effect';

describe('VesselEmissionsService', () => {
  let service: VesselEmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VesselEmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
