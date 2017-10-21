import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      This is an app showing Single File Component with custom types working
    </h1>
    <app-external></app-external>
    <app-inline></app-inline>
    <app-markdown></app-markdown>
  `
})
export class AppComponent {
}
