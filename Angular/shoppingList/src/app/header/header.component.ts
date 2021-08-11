import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class Header {
  @Output() itemSelected = new EventEmitter<string>();
  onRecipe() {
    this.itemSelected.emit("recipe");
  }
  onShoppingList() {
    this.itemSelected.emit('shopping');
  }
}
