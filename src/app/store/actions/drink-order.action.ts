import { createAction, props } from '@ngrx/store';
import { DrinkOrderModel } from '../../models/drink-order.model';

export const create = createAction(
  '[Drink Order] Created',
  props<DrinkOrderModel>()
);
export const increaseByOne = createAction(
  '[Drink Order] Increased by 1',
  props<DrinkOrderModel>()
);
export const increaseByAmount = createAction(
  '[Drink Order] Increased by X',
  props<DrinkOrderModel>()
);
export const decreaseByOne = createAction(
  '[Drink Order] Decreased',
  props<DrinkOrderModel>()
);
export const cancel = createAction(
  '[Drink Order] Canceled',
  props<DrinkOrderModel>()
);
