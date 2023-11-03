import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Les3Component } from './les3.component';

describe('Les3Component', () => {
  let component: Les3Component;
  let fixture: ComponentFixture<Les3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Les3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Les3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
