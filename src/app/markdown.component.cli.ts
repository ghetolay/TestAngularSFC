import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  template: `
    <h2>You can even use markdown</h2>

    <p>
      Although CLI supports only HTML so you need to use the custom webpack build to be able to see this component properly.
      You can even add more loaders and start using them right away.
    </p>
  `
})
export class MarkdownComponent { }

