import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumrapComponent } from './cumrap.component';

describe('CumrapComponent', () => {
  let component: CumrapComponent;
  let fixture: ComponentFixture<CumrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
