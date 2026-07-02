import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  private readonly apiUrl = 'http://localhost:3000/notes'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  fetchNotes(){
    this.http.get<Note[]>(this.apiUrl).subscribe(
      (data) => {
        this.notes.set(data);
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
  
 private notes = signal<Note[]>([]);

  getNotes() {
    return this.notes();
  }

  addNote(title: string, content: string) {
    const newNote: Omit<Note, 'id'> = {
      
      title,
      content,
      createdAt: new Date()
    };

    this.http.post<Note>(this.apiUrl, newNote).subscribe(
      (note) => {
        this.notes.update(notes => [...notes, note]);
      },
      (error) => {
        console.error('Error adding note:', error);
      }
    );   
  }

    getNoteById(id: string) {

    return this.http.get<Note[]>(`${this.apiUrl}/${id}`)
  }
}
