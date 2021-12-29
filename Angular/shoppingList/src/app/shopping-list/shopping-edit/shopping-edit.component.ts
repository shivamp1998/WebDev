import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=> {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}
