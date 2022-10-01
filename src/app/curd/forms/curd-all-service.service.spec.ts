import { CurdAllServiceService } from './curd-all-service.service';
import { TestBed } from '@angular/core/testing';

describe('CurdAllServiceService', () => {
  let service: CurdAllServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdAllServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
