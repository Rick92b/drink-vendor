import { Component, Input } from '@angular/core';
import { DrinkModel } from '../../../../models/drink.model';
import { DrinkOrderModel } from '../../../../models/drink-order.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  create,
  increaseByAmount,
} from '../../../../store/actions/drink-order.action';

@Component({
  selector: 'drink-showcase',
  templateUrl: './drink-showcase.component.html',
  styleUrls: ['./drink-showcase.component.css'],
})
export class DrinkShowcaseComponent {
  @Input()
  drink: DrinkModel = {} as DrinkModel;
  quantity = 1;
  drinkOrders: DrinkOrderModel[] = [];
  private orders: Subscription;

  constructor(private store: Store<{ drinkOrders: DrinkOrderModel[] }>) {
    this.orders = store
      .select('drinkOrders')
      .subscribe((drinkOrders) => (this.drinkOrders = drinkOrders));
  }

  add() {
    if (this.drinkOrders.some((drink) => drink.name === this.drink.name)) {
      this.store.dispatch(
        increaseByAmount({ ...this.drink, quantity: this.quantity })
      );
    } else {
      this.store.dispatch(create({ ...this.drink, quantity: this.quantity }));
    }
  }
}
