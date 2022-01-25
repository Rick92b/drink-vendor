import { Component, OnDestroy } from '@angular/core';
import { DrinkOrderModel } from '../../models/drink-order.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnDestroy {
  drinkOrders: DrinkOrderModel[] = [];
  checked = false;
  totalCost = 0;
  private orders: Subscription;
  constructor(private store: Store<{ drinkOrders: DrinkOrderModel[] }>) {
    this.orders = store
      .select('drinkOrders')
      .subscribe((drinkOrders) => (this.drinkOrders = drinkOrders));
    this.totalCost = this.drinkOrders
      .map((drinkOrder) => drinkOrder.price * drinkOrder.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalCost(): number {
    if (this.checked) return this.totalCost * 0.8;
    return this.totalCost;
  }

  ngOnDestroy(): void {
    this.orders.unsubscribe();
  }
}
