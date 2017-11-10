import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';
import { ShopingListService } from './../shopingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(
    private shopingListService: ShopingListService
  ) { }

  ngOnInit() {
  }

  private addIngredient(): void {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.shopingListService.addIngredient(name, amount);
    this.clearForm();
  }

  private clearForm(): void {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

}
