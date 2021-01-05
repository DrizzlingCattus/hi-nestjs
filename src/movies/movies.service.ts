import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    console.log('insert into movies', this.movies);
    return movieData;
  }

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }
}
