import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDietsComponent } from './food-diets.component';

describe('FoodDetsComponent', () => {
  let component: FoodDietsComponent;
  let fixture: ComponentFixture<FoodDietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDietsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
