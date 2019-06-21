import { TestBed } from '@angular/core/testing';

import { AlternativaService } from './alternativa.service';

describe('AlternativaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlternativaService = TestBed.get(AlternativaService);
    expect(service).toBeTruthy();
  });
});
