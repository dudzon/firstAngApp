import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './../components/recipes/recipes.component';
import { ShoppingListComponent } from './../components/shopping-list/shopping-list.component';
import { RecipeStartComponent } from 'src/components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from 'src/components/recipes/recipe-details/recipe-details.component';
import { RecipesEditComponent } from 'src/components/recipes/recipes-edit/recipes-edit.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/recipes', pathMatch: 'full'
    },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipesEditComponent },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipesEditComponent }
        ]
    },
    { path: 'list', component: ShoppingListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
