import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonveComponent } from './chonve.component';

describe('ChonveComponent', () => {
  let component: ChonveComponent;
  let fixture: ComponentFixture<ChonveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChonveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChonveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
