import { Injectable } from '@nestjs/common';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService {
  students: StudentDto[] = [
    { nom: 'John', prenom: 'Doe', email: 'john.doe@example.com', age: 20 },
    { nom: 'Donal', prenom: 'TRUMP', email: 'jane.doe@example.com', age: 22 },
  ];
  createStudent(studentDto: StudentDto): void {
    this.students.push(studentDto);
  }

  getStudents(): StudentDto[] {
    return this.students;
  }
  updateStudent(index: number, studentDto: StudentDto): void {
    if (index >= 0 && index < this.students.length) {
      this.students[index] = studentDto;
    }
  }
  deleteStudent(index: number): void {
    if (index >= 0 && index < this.students.length) {
      this.students.splice(index, 1);
    }
  }
}
