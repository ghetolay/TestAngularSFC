import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  template: `!md!
## You can even use markdown

It's just a matter of adding loaders to your webpack config.

  `
})
export class MarkdownComponent { }

