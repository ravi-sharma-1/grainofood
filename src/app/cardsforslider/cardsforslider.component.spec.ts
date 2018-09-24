import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsforsliderComponent } from './cardsforslider.component';

describe('CardsforsliderComponent', () => {
  let component: CardsforsliderComponent;
  let fixture: ComponentFixture<CardsforsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsforsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsforsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
