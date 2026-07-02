import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiURL = 'https://www.omdbapi.com/';
  private apiKey = '65e53241';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const url = `${this.apiURL}?s=${title}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
