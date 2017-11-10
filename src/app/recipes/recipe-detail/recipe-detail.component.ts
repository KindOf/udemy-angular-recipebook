import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { ShopingListService } from './../../shopping-list/shopingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  ingredientsAdded = false;
  
  constructor(
    private recipeService: RecipeService
  ) {
  }
  
  ngOnInit() {
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsFromRecipe(ingredients);
    this.ingredientsAdded = true;
  }

}
