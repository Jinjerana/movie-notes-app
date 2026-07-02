import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.models';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {

  constructor(private noteService: NoteService) {}

  protected newNote : Partial<Note> = {   
    title: '',
    content: '',  
  };

  protected submitted = false;

  protected addNote(form: any) {
    this.submitted = true;

    if(form.invalid) {
      return;
    }

    const noteData = this.newNote;

    if (!noteData.title || !noteData.content) return;

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote = { title: '', content: '' };

    form.resetForm();
    this.submitted = false;
  }

}
