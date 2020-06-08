import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTextComponent } from './zone-text.component';

describe('ZoneTextComponent', () => {
  let component: ZoneTextComponent;
  let fixture: ComponentFixture<ZoneTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
