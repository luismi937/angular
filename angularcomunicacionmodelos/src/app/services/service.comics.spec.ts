import { TestBed } from '@angular/core/testing';

import { ServiceComics } from './service.comics';

describe('ServiceComics', () => {
  let service: ServiceComics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceComics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
