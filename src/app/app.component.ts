import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private showRecipe = true;

  changeView(event: string) {
    this.showRecipe = event === 'recipes' ? true : false;
  }
}
