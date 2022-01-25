import { DrinkOrderModel } from '../drink-order.model';

export class DrinkOrderBuilder {
  private imagePath: string;
  private name: string;
  private price: number;
  private quantity: number;

  //Strict Class Initialization rule
  constructor() {
    this.imagePath = '';
    this.name = '';
    this.price = 0;
    this.quantity = 0;
  }
  static drinkOrder(): DrinkOrderBuilder {
    return new DrinkOrderBuilder();
  }

  static italianCoffeeDrinkOrder(): DrinkOrderBuilder {
    return this.drinkOrder()
      .withImagePath('assets/it-coffee.jpg')
      .withName('Italian Coffee')
      .withPrice(1.2)
      .withQuantity(3);
  }
  static americanCoffeeDrinkOrder(): DrinkOrderBuilder {
    return this.drinkOrder()
      .withImagePath('assets/am-coffe.jpg')
      .withName('American Coffee')
      .withPrice(1.5)
      .withQuantity(3);
  }

  static teaDrinkOrder(): DrinkOrderBuilder {
    return this.drinkOrder()
      .withImagePath('assets/tea.jpg')
      .withName('Tea')
      .withPrice(2.2)
      .withQuantity(3);
  }

  static hotChocolateDrinkOrder(): DrinkOrderBuilder {
    return this.drinkOrder()
      .withImagePath('assets/hot-choc.jpg')
      .withName('Hot Chocolate')
      .withPrice(4.5)
      .withQuantity(3);
  }

  withImagePath(imagePath: string) {
    this.imagePath = imagePath;
    return this;
  }
  withName(name: string) {
    this.name = name;
    return this;
  }
  withPrice(price: number) {
    this.price = price;
    return this;
  }
  withQuantity(quantity: number) {
    this.quantity = quantity;
    return this;
  }

  build(): DrinkOrderModel {
    return {
      imagePath: this.imagePath,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    } as DrinkOrderModel;
  }
}
