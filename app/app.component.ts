import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  accordionItems = [
    { title: 'title 1', content: 'content 1' },
    { title: 'title 2', content: 'content 2' },
    { title: 'title 3', content: 'content 3' },
    { title: 'title 4', content: 'content 4' },
  ];
}
