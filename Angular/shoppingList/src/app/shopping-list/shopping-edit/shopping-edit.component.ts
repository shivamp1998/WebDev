import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from "../shopping-list.service";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName;
  @ViewChild('amountInput') ingredientAmount;

  constructor(private slService: ShoppinglistService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredient(name,amount);
    this.slService.addIngredients(ingredient);
    return false;
  }

}
