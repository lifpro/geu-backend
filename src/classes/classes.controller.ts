import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Classes } from './classes.entity';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}
  @Get()
  read(): Promise<Classes[]> {
    return this.classesService.read();
  }
  @Post()
  create(@Body() o: Classes): Promise<Classes> {
    return this.classesService.create(o);
  }
  @Get(':id')
  findById(id: number): Promise<Classes> {
    return this.classesService.findById(id);
  }
  @Put(':id')
  update(id: number, @Body() o: Classes): Promise<Classes> {
    return this.classesService.update(id, o);
  }
  @Delete(':id')
  delete(id: number): Promise<void> {
    return this.classesService.delete(id);
  }
}
