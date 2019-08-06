import { Injectable } from '@angular/core';
import { NoteClass } from './note';
import { SEARCH } from './note-stock';
@Injectable()
export class NoteService {

  private notes : NoteClass[] = SEARCH;
  constructor() { }
  
  getClick(SearchElement: string): NoteClass{
    for(var i = 0; i < this.notes.length; i++)
    {
      if(this.notes[i].SearchElement == SearchElement)
      {
        return this.notes[i];
      }
    }
  }
  
}
