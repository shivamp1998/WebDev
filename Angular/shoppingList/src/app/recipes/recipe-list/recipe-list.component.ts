import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from  '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is a simple test','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'),
    new Recipe('A new Test recipe', 'this is another test recipe', 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe){
      this.recipeWasSelected.emit(recipe);

  }

}
