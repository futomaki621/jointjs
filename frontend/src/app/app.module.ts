import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CodemirrorViewComponent } from './codemirror-view/codemirror-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    GraphViewComponent,
    FormViewComponent,
    CodemirrorViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
