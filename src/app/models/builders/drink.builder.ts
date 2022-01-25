import { DrinkModel } from '../drink.model';

export class DrinkBuilder {
  private imagePath: string;
  private name: string;
  private price: number;

  //Strict Class Initialization rule
  constructor() {
    this.imagePath = '';
    this.name = '';
    this.price = 0;
  }
  static drink(): DrinkBuilder {
    return new DrinkBuilder();
  }

  static italianCoffeeDrink(): DrinkBuilder {
    return this.drink()
      .withImagePath('assets/it-coffee.jpg')
      .withName('Italian Coffee')
      .withPrice(1.2);
  }
  static americanCoffeeDrink(): DrinkBuilder {
    return this.drink()
      .withImagePath('assets/am-coffe.jpg')
      .withName('American Coffee')
      .withPrice(1.5);
  }

  static teaDrink(): DrinkBuilder {
    return this.drink()
      .withImagePath('assets/tea.jpg')
      .withName('Tea')
      .withPrice(2.2);
  }

  static hotChocolateDrink(): DrinkBuilder {
    return this.drink()
      .withImagePath('assets/hot-choc.jpg')
      .withName('Hot Chocolate')
      .withPrice(4.5);
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

  build(): DrinkModel {
    return {
      imagePath: this.imagePath,
      name: this.name,
      price: this.price,
    } as DrinkModel;
  }
}
