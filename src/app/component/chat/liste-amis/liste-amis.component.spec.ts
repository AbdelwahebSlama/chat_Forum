import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAmisComponent } from './liste-amis.component';

describe('ListeAmisComponent', () => {
  let component: ListeAmisComponent;
  let fixture: ComponentFixture<ListeAmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
