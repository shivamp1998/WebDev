import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName;
  @ViewChild('amountInput') ingredientAmount;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(ingredient);
  }

}
