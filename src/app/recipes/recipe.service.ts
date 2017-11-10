import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShopingListService } from './../shopping-list/shopingList.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe(
      'Recipe with ingredient',
      'Recipe with Ingredients array',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('ing1', 2), new Ingredient('ing2', 4)],
    )
  ];

  public selectedRecipe = new EventEmitter<Recipe>();

  constructor(
    private shopingListService: ShopingListService
  ) { }

  get getRecipes(): Recipe[] {
    return this.recipes;
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.shopingListService.addIngredients(ingredients);
  }

}
