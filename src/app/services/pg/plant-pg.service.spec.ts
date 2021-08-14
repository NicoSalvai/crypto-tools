import { TestBed } from '@angular/core/testing';

import { PlantPgService } from './plant-pg.service';

describe('PlantPgService', () => {
  let service: PlantPgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantPgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
