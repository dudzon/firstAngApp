import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { RecipeListComponent } from '../components/recipes/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from '../components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from '../components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from '../components/recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListService } from 'src/components/shopping-list/shopping-list.service';
import { DropdownDirective } from '../directives/dropdown.directive';
import { AppRoutingModule } from './app-routing-module';
import { RecipeStartComponent } from '../components/recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from '../components/recipes/recipes-edit/recipes-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipesEditComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
