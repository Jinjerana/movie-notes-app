import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {RouterModule} from "@angular/router";
import { NoteAdd } from '../../components/note-add/note-add';


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, NoteAdd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(private noteService: NoteService) {}

  showAlert() {
    alert('This is an alert from the App component!');
  }

  ngOnInit(): void {
    this.noteService.fetchNotes();
  }

  protected get notes() {
    return this.noteService.getNotes();
  }

  
}
