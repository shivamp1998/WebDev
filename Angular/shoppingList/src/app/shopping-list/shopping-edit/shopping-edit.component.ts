import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
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
  @ViewChild('f') slForm: NgForm;
  constructor(private slService: ShoppingListService) { }
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=> {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if( this.editMode ) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();

  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete()  {
    this.slService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}
