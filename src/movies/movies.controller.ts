import { Controller, Get, Param, Delete, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'all movies list';
  }

  @Get('/:id')
  getOneById(@Param('id') id: string): string {
    return `this return one movies ${id}`;
  }

  @Post()
  create(): string {
    return 'this is create';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): string {
    return 'this is delete';
  }

  @Put('/:id')
  patch(@Param('id') movieId: string): string {
    return 'this is patch';
  }
}
