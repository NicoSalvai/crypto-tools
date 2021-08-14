import { TestBed } from '@angular/core/testing';

import { AxieZoneService } from './axie-zone.service';

describe('AxieZoneService', () => {
  let service: AxieZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxieZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
