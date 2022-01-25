import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCartComponent } from './item-cart.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DrinkOrderModel } from '../../../../models/drink-order.model';
import { DrinkOrderBuilder } from '../../../../models/builders/drink-order.builder';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

describe('ItemCartComponent', () => {
  let component: ItemCartComponent;
  let fixture: ComponentFixture<ItemCartComponent>;
  let store: MockStore;
  const testShoppingCart: DrinkOrderModel[] = [
    DrinkOrderBuilder.americanCoffeeDrinkOrder().build(),
    DrinkOrderBuilder.teaDrinkOrder().withQuantity(1).build(),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCartComponent],
      imports: [MatTableModule, MatIconModule, MatButtonModule],
      providers: [
        provideMockStore({
          initialState: [],
          selectors: [{ selector: 'drinkOrders', value: testShoppingCart }],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCartComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data correctly', (done) => {
    component.shoppingCart$.subscribe((shoppingCart) => {
      expect(shoppingCart).toEqual(testShoppingCart);
      done();
    });
  });

  it('should display the value correctly', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(testShoppingCart.length + 2); //header and footer
    // Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe(' Drink');
    expect(headerRow.cells[1].innerHTML).toBe(' Quantity');
    expect(headerRow.cells[2].innerHTML).toBe(' Cost');
    expect(headerRow.cells[3].innerHTML).toBe(' Action');
    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toBe(` ${testShoppingCart[0].name} `);
    // no quantity because of buttons
    expect(row1.cells[2].innerHTML).toBe(
      ` €${(testShoppingCart[0].quantity * testShoppingCart[0].price).toFixed(
        2
      )} `
    );
    // no action because of button
  });
});
