import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { ShopingListService } from './../shopping-list/shopingList.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() public showComponent = new EventEmitter<string>();
  private ingredientsCount: number;

  constructor(
    private shoppingListService: ShopingListService,
  ) {
  }
  
  ngOnInit() {
    this.ingredientsCount = this.shoppingListService.ingredients.length;
    this.shoppingListService.onIngredientAdded.subscribe(ingredients => {
      this.ingredientsCount = ingredients.length;
    });
  }

  public onSelect(view): void {
    this.showComponent.emit(view);
  }
}
