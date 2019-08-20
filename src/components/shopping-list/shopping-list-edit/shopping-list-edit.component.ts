import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode: false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((id: number) => {
        this.editedItemIndex = id;
        this.editMode = false;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
        console.log(this.editedItem);
      });
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.onNewIngredientAdded(ingredient);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
