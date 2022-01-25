import { DrinkBuilder } from '../../models/builders/drink.builder';
import { Action, createReducer } from '@ngrx/store';
import { DrinkModel } from '../../models/drink.model';

export const initialState = [
  DrinkBuilder.italianCoffeeDrink().build(),
  DrinkBuilder.americanCoffeeDrink().build(),
  DrinkBuilder.teaDrink().build(),
  DrinkBuilder.hotChocolateDrink().build(),
];

export const _drinkReducer = createReducer(initialState);

export function drinkReducer(state: DrinkModel[] | undefined, action: Action) {
  return _drinkReducer(state, action);
}
