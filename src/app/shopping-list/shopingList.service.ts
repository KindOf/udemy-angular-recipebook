import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShopingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  onIngredientAdded = new EventEmitter<Ingredient[]>();

  addIngredient(name: string, amount: number) {
    this._ingredients.push(new Ingredient(name, amount));
    this.onIngredientAdded.emit(this._ingredients);
  }

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientAdded.emit(this._ingredients);
  }

}
