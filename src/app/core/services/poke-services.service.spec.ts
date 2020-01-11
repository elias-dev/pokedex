import { TestBed } from '@angular/core/testing';

import { PokeServicesService } from './poke-services.service';

describe('PokeServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeServicesService = TestBed.get(PokeServicesService);
    expect(service).toBeTruthy();
  });
});
