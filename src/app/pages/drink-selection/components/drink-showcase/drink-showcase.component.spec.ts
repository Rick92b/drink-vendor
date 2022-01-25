import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkShowcaseComponent } from './drink-showcase.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DrinkBuilder } from '../../../../models/builders/drink.builder';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DrinkShowcaseComponent', () => {
  let component: DrinkShowcaseComponent;
  let fixture: ComponentFixture<DrinkShowcaseComponent>;
  let store: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkShowcaseComponent],
      imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkShowcaseComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    component.drink = DrinkBuilder.hotChocolateDrink().build();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly initialize data given input', () => {
    const title = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(title.innerHTML).toBe('Hot Chocolate');
  });

  it('should update the binded value correctly', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 4;
    input.dispatchEvent(new Event('input'));
    expect(component.quantity).toBe(4);
  });
});
