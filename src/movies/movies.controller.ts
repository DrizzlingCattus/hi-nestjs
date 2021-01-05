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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'all movies list';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `searching ${searchingYear}`;
  }

  @Get('/:id')
  getOneById(@Param('id') id: string): string {
    return `this return one movies ${id}`;
  }

  @Post()
  create(@Body() movieData): string {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): string {
    return `this is delete ${movieId}`;
  }

  @Put('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    console.log(`patch with ${updateData}`);
    return {
      id: movieId,
      ...updateData,
    };
  }
}
