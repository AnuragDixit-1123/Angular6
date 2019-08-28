
// This is model class to create a whole new recipies. 
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
  
    // SO that you donot access it directly from outside
    private recipes: Recipe[] = [
        // Calling the constructor over here
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
            ]),
          new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
              new Ingredient('Buns', 2),
              new Ingredient('Meat', 1)
            ])
       ];

       constructor(private slService: ShoppingListService) {}

       getRecipes() {
           // This will return the reference
           //    return this.recipes
           return this.recipes.slice()

       }

       getRecipe(id: number) {
        // This will return the reference
        //    return this.recipes
        console.log('id recieveed', id)
        return this.recipes[id]

    }




       addIngredientsToShoppingListComponent(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
       }

       
    
}