import { TestBed } from '@angular/core/testing';

import { AxieteamsService } from './axieteams.service';

describe('AxieteamsService', () => {
  let service: AxieteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxieteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
