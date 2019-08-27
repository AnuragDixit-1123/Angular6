import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

 @Input() recipe: Recipe;
 // for cross component communication
//  @Output()  recipeSelected = new EventEmitter<void>();
  
// Injecting recipe service
constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
      this.recipeService.recipeSelected.emit(this.recipe);
  }

}
