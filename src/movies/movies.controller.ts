import {
  Controller,
  Query,
  Get,
  Param,
  Delete,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `searching ${searchingYear}`;
  }

  @Get('/:id')
  getOneById(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData): string {
    console.log(movieData);
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): Movie[] {
    return this.moviesService.deleteOne(movieId);
  }

  @Put('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    console.log(`patch with ${updateData}`);
    return this.moviesService.update(movieId, updateData);
  }
}
