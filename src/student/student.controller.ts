import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentDto } from './student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(): StudentDto[] {
    return this.studentService.getStudents();
  }
  @Post()
  createStudent(@Body() studentDto: StudentDto) {
    this.studentService.createStudent(studentDto);
  }
  @Put(':index')
  updateStudent(@Param('index') index: number, @Body() studentDto: StudentDto) {
    this.studentService.updateStudent(index, studentDto);
  }
  @Delete(':index')
  deleteStudent(@Param('index') index: number) {
    this.studentService.deleteStudent(index);
  }
}
