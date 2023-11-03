import { TestBed } from '@angular/core/testing';

import { BrandsMockService } from './brands-mock.service';

describe('BrandsMockService', () => {
  let service: BrandsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
