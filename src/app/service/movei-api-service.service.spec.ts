import { TestBed } from '@angular/core/testing';

import { MoveiApiServiceService } from './movei-api-service.service';

describe('MoveiApiServiceService', () => {
  let service: MoveiApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveiApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
