import { Injectable, NotFoundException } from '@nestjs/common';
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
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with Id ${id} not found!`);
    }
    return movie;
  }

  deleteOne(id: string): Movie[] {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return this.movies;
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ id, ...updateData });
    return movie;
  }
}
