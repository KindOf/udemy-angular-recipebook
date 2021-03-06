import { ShopingListService } from './shopingList.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(
    private shopingListService: ShopingListService
  ) { }

  ngOnInit() {
    this.ingredients = this.shopingListService.ingredients;
  }
}
