import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';

import {NoteService} from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
