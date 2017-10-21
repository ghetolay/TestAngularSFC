import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../../src/app/app.component';
import { ExternalComponent } from '../../src/app/external.component';
import { InlineComponent } from '../../src/app/inline.component';
import { MarkdownComponent } from './markdown.component.webpack';

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
