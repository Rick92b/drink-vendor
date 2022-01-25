import { Component, EventEmitter, Output } from '@angular/core';
import { DrinkOrderModel } from '../../../../models/drink-order.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  cancel,
  decreaseByOne,
  increaseByOne,
} from '../../../../store/actions/drink-order.action';

@Component({
  selector: 'item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css'],
})
export class ItemCartComponent {
  @Output()
  goToPaymentPage = new EventEmitter<void>();

  shoppingCart$: Observable<DrinkOrderModel[]>;
  displayedColumns = ['drink', 'quantity', 'cost', 'action'];

  constructor(private store: Store<{ drinkOrders: DrinkOrderModel[] }>) {
    this.shoppingCart$ = store.select('drinkOrders');
  }

  removeDrinkOrder(drinkOrder: DrinkOrderModel): void {
    this.store.dispatch(cancel(drinkOrder));
  }

  increaseQuantity(drinkOrder: DrinkOrderModel): void {
    this.store.dispatch(increaseByOne(drinkOrder));
  }

  decreaseQuantity(drinkOrder: DrinkOrderModel): void {
    if (drinkOrder.quantity >= 2)
      this.store.dispatch(decreaseByOne(drinkOrder));
    if (drinkOrder.quantity == 1) this.store.dispatch(cancel(drinkOrder));
  }

  getTotalCost(drinkOrders: DrinkOrderModel[] | null): number {
    if (drinkOrders)
      return drinkOrders
        .map((drinkOrder) => drinkOrder.price * drinkOrder.quantity)
        .reduce((acc, value) => acc + value, 0);
    return 0;
  }

  changePage(): void {
    this.goToPaymentPage.emit();
  }
}
