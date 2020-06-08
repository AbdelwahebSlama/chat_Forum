import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTextSousCommentComponent } from './zone-text-sous-comment.component';

describe('ZoneTextSousCommentComponent', () => {
  let component: ZoneTextSousCommentComponent;
  let fixture: ComponentFixture<ZoneTextSousCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneTextSousCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneTextSousCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
