import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './../../models/ingredient.model';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('ham', 20),
    new Ingredient('cheese', 30)
  ];
  constructor() { }
  getIngredient(id: number) {
    return this.ingredients[id];
  }
  getIngredients() {
    return this.ingredients.slice();
  }
  onNewIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
