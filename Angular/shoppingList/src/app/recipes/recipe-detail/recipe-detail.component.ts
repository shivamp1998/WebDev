import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from "../recipe.service";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  active = false;
  constructor(private recipeService: RecipeService) { }
  onDropdown() {
    this.active = !this.active;
  }
  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }

}
