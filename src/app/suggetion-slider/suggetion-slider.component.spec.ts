import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggetionSliderComponent } from './suggetion-slider.component';

describe('SuggetionSliderComponent', () => {
  let component: SuggetionSliderComponent;
  let fixture: ComponentFixture<SuggetionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggetionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggetionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
