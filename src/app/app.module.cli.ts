import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExternalComponent } from './external.component';
import { InlineComponent } from './inline.component';
import { MarkdownComponent } from './markdown.component.cli';

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent,
    InlineComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
