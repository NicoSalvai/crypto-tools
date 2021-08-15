import { TestBed } from '@angular/core/testing';

import { AxiecardService } from './axiecard.service';

describe('AxiecardService', () => {
  let service: AxiecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
