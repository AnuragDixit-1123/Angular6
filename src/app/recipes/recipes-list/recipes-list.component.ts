import { Component, OnInit, Output, EventEmitter } from '@angular/core';


// This is model class to create a whole new recipies. 
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // Calling the constructor over here
    new Recipe('A test recipe', 'This is simply test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2015%2F09%2Fmain%2F1509p22-beef-tenderloin-steaks_0.jpg%3Fitok%3DBJM8HIuw&q=85'),
    new Recipe('Another test recipe', 'This is simply another test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2015%2F09%2Fmain%2F1509p22-beef-tenderloin-steaks_0.jpg%3Fitok%3DBJM8HIuw&q=85')
   ];


  constructor() { }

  ngOnInit() {
  }
  

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)

  }

}
