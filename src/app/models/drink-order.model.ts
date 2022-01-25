import { DrinkModel } from './drink.model';

export interface DrinkOrderModel extends DrinkModel {
  quantity: number;
}
