import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    GraphViewComponent,
    FormViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
