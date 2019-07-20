import { TestBed } from '@angular/core/testing';

import { VenueMesiService } from './venue-mesi.service';

describe('VenueMesiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenueMesiService = TestBed.get(VenueMesiService);
    expect(service).toBeTruthy();
  });
});
