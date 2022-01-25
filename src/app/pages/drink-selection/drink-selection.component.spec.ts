import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSelectionComponent } from './drink-selection.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

describe('DrinkSelectionComponent', () => {
  let component: DrinkSelectionComponent;
  let fixture: ComponentFixture<DrinkSelectionComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DrinkSelectionComponent,
        ItemCartComponent,
        DrinkSelectionComponent,
      ],
      imports: [RouterTestingModule, MatTableModule, MatIconModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSelectionComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
