import { TestBed } from '@angular/core/testing';

import { SousCommentaireService } from './sous-commentaire.service';

describe('SousCommentaireService', () => {
  let service: SousCommentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousCommentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
