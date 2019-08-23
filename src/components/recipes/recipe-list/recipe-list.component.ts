import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   {
  //     name: 'A test recipe',
  //     description: 'Trest',
  //     imagePath:
  //       'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
  //   },
  //   {
  //     name: 'Second recipe',
  //     description: 'Test 2',
  //     imagePath:
  //       'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'
  //   }
  // ];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
   this.recipes = this.recipeService.getRecipes();

  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
