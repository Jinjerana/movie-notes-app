import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { ActivatedRoute } from '@angular/router';
import{CommonModule} from "@angular/common";
import { NoteShortenerPipe } from '../../pipes/note-shortener-pipe';
import { Note } from '../../models/note.models';

@Component({
  selector: 'app-note-detail',
  imports: [CommonModule, NoteShortenerPipe],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
})
export class NoteDetail {
  noteId!: string
  note: Note | undefined;

  constructor( private route: ActivatedRoute,
    private noteService: NoteService) {
    this.route.params.subscribe(params => {
      this.noteId = params['id']; // Get the id as a string
      this.note = this.noteService.getNotes().find(note => note.id === this.noteId);
    });
  }
}
