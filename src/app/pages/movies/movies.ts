import { Component } from '@angular/core';
import { MovieService } from '../../services/movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [FormsModule, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  constructor(private movieService: MovieService) {}

  searchTitle: string = '';
  movies: any[] = [];
  errorMessage: string = '';
  
  searchMovies() {
    if (!this.searchTitle.trim()) return;

    this.movieService.searchMovies(this.searchTitle).subscribe({
      next: (response: any) => {
        if(response.Search) {
          this.movies = response.Search;
          this.errorMessage = '';
        } else {
          this.movies = [];
          this.errorMessage = 'No movies found.';
        }
      },
      error: () => {
        this.errorMessage = 'An error occurred while fetching movies.';
        this.movies = [];
      },
      complete: () => {
        console.log('Movie search completed.');
      }
    }
  )
  }
}
