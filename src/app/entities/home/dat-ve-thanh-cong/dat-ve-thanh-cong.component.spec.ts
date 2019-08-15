import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeThanhCongComponent } from './dat-ve-thanh-cong.component';

describe('DatVeThanhCongComponent', () => {
  let component: DatVeThanhCongComponent;
  let fixture: ComponentFixture<DatVeThanhCongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeThanhCongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeThanhCongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
