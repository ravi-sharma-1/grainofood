import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmatonComponent } from './order-confirmaton.component';

describe('OrderConfirmatonComponent', () => {
  let component: OrderConfirmatonComponent;
  let fixture: ComponentFixture<OrderConfirmatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
