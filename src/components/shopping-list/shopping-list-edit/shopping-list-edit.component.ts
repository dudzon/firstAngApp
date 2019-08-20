import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  selectedAmount: number;
  // @Output() newIngredient = new EventEmitter<{
  //   name: string;
  //   amount: number;
  // }>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }
  onIngredientAdded(inputName: HTMLInputElement) {
    // this.newIngredient.emit({
    //   name: inputName.value,
    //   amount: this.selectedAmount
    // });
    this.shoppingListService.onNewIngredientAdded({
      name: inputName.value,
      amount: this.selectedAmount,
    });
  }
}
