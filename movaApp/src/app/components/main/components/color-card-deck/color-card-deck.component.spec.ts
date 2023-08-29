import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCardDeckComponent } from './color-card-deck.component';

describe('ColorCardDeckComponent', () => {
  let component: ColorCardDeckComponent;
  let fixture: ComponentFixture<ColorCardDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCardDeckComponent]
    });
    fixture = TestBed.createComponent(ColorCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
