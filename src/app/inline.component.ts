import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <h2>
      But you can now also have inline template and style of any types.
    </h2>
    <p>The styles of this component are inlined and expressed with <strong>scss</strong> which is the default type.
     You can even use <code>@import</code>!</p>
    <p>But you can also decide to use a different type like stylus just once on a specific style</p>
  `,
  styles: [`
    @import 'var';
    p {
      strong {
        color: $color;
      }
    }
  `,
  `!styl!
    p
      font-size 16px
  `]
})
export class InlineComponent {
}
