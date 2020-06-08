import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCommentaireComponent } from './sous-commentaire.component';

describe('SousCommentaireComponent', () => {
  let component: SousCommentaireComponent;
  let fixture: ComponentFixture<SousCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
