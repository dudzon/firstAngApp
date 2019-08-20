import { Component, OnInit } from '@angular/core';
import { Recipe } from './../../models/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.currentRecipe = recipe;
    });
  }
  // handleCurrentRecipe(recipe) {
  //   this.currentRecipe = recipe;
  // }
}
