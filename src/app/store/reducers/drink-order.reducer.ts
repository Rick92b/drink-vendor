import { DrinkOrderModel } from '../../models/drink-order.model';
import { createReducer, on } from '@ngrx/store';
import {
  create,
  cancel,
  increaseByOne,
  increaseByAmount,
  decreaseByOne,
} from '../actions/drink-order.action';

export const initialState: DrinkOrderModel[] = [];

const _counterReducer = createReducer(
  initialState,
  on(create, (state: DrinkOrderModel[], drinkOrder: DrinkOrderModel) => {
    return [...state, drinkOrder];
  }),
  on(increaseByOne, (state: DrinkOrderModel[], drinkOrder: DrinkOrderModel) => {
    return state
      .map((driOrd) => ({ ...driOrd }))
      .map((drinkOrd) => {
        if (drinkOrder.name === drinkOrd.name)
          return { ...drinkOrd, quantity: drinkOrd.quantity + 1 };
        return drinkOrd;
      });
  }),
  on(
    increaseByAmount,
    (state: DrinkOrderModel[], drinkOrder: DrinkOrderModel) => {
      return state
        .map((driOrd) => ({ ...driOrd }))
        .map((drinkOrd) => {
          if (drinkOrder.name === drinkOrd.name)
            return {
              ...drinkOrd,
              quantity: drinkOrd.quantity + drinkOrder.quantity,
            };
          return drinkOrd;
        });
    }
  ),
  on(decreaseByOne, (state: DrinkOrderModel[], drinkOrder: DrinkOrderModel) => {
    return state
      .map((driOrd) => ({ ...driOrd }))
      .map((drinkOrd) => {
        if (drinkOrder.name === drinkOrd.name)
          return { ...drinkOrd, quantity: drinkOrd.quantity - 1 };
        return drinkOrd;
      });
  }),
  on(cancel, (state: DrinkOrderModel[], drinkOrder: DrinkOrderModel) => {
    return state
      .map((driOrd) => ({ ...driOrd }))
      .filter((drinkOrd) => drinkOrd.name !== drinkOrder.name);
  })
);

export function drinkOrderReducer(
  state: DrinkOrderModel[] | undefined,
  action: any
) {
  return _counterReducer(state, action);
}
