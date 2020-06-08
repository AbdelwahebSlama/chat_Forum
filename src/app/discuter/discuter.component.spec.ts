import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscuterComponent } from './discuter.component';

describe('DiscuterComponent', () => {
  let component: DiscuterComponent;
  let fixture: ComponentFixture<DiscuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
