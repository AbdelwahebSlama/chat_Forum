import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutgroupeComponent } from './ajoutgroupe.component';

describe('AjoutgroupeComponent', () => {
  let component: AjoutgroupeComponent;
  let fixture: ComponentFixture<AjoutgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
