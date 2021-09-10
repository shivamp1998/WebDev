import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";
import {ShoppinglistService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe','This is a simple test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',[new Ingredient('Aaalo', 3), new Ingredient('Panner', 10)]),
    new Recipe('A new Test recipe', 'this is another test recipe', 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',[new Ingredient("masala",20), new Ingredient('dhaniya',200)])
  ];
  constructor(private slService: ShoppinglistService){}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredient(ingredients);
  }
}
