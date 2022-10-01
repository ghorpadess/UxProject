import { TestBed } from '@angular/core/testing';

import { CApiService } from './c-api.service';

describe('CApiService', () => {
  let service: CApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
