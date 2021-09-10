import {Ingredient} from "../shared/ingredient.model";
import {Output, EventEmitter} from "@angular/core";
export class ShoppinglistService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[] = [
    new Ingredient("Apple" , 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredient(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
