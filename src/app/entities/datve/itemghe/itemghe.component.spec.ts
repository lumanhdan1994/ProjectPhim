import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemgheComponent } from './itemghe.component';

describe('ItemgheComponent', () => {
  let component: ItemgheComponent;
  let fixture: ComponentFixture<ItemgheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemgheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
