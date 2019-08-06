import { Component, OnInit } from '@angular/core';

import { NoteService } from '../note.service';
import { NoteClass } from '../note';
import { SEARCH } from '../note-stock';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private CurrentSearchValue : NoteClass;
  private pastSearchValue : NoteClass[] = []
  constructor(private noteservice:NoteService) { }

  
  ngOnInit() {
  }

  getClick(SearchElement : string): void {
  	this.CurrentSearchValue = this.noteservice.getClick(SearchElement);
    
    
    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.CurrentSearchValue);
  }
}
