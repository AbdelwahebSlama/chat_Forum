import { TestBed } from '@angular/core/testing';

import { DiscuterService } from './discuter.service';

describe('DiscuterService', () => {
  let service: DiscuterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscuterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
