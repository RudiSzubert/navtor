import { TestBed } from '@angular/core/testing';

import { Vessels } from './vessels';

describe('Vessels', () => {
  let service: Vessels;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vessels);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
