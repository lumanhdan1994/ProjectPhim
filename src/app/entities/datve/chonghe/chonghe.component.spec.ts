import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChongheComponent } from './chonghe.component';

describe('ChongheComponent', () => {
  let component: ChongheComponent;
  let fixture: ComponentFixture<ChongheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChongheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChongheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
