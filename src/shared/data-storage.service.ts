import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/components/recipes/recipe.service';
import { Recipe } from 'src/models/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService) { }
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-recipe-book-3c4aa.firebaseio.com/recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }
  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-recipe-book-3c4aa.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
