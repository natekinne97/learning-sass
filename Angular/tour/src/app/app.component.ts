import { Component } from '@angular/core';

@Component({
  // the equivalant of root in react
  selector: 'app-root',
  // the html to be displayed
  templateUrl: './app.component.html',
  // the style
  styleUrls: ['./app.component.css']
})
// the logic behind the html
export class AppComponent {
  title = 'Tour';
}
