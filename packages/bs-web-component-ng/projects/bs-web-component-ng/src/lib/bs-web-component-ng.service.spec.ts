import { TestBed } from '@angular/core/testing';

import { BsWebComponentNgService } from './bs-web-component-ng.service';

describe('BsWebComponentNgService', () => {
  let service: BsWebComponentNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsWebComponentNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
