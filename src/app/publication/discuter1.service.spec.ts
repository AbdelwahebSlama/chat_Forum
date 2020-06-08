import { TestBed } from '@angular/core/testing';

import { Discuter1Service } from './discuter1.service';

describe('DiscuterService', () => {
  let service: Discuter1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Discuter1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
