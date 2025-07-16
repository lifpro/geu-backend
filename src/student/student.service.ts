import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDto } from './student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(studentDto: StudentDto): Promise<Student> {
    const student = this.studentRepository.create(studentDto);
    return this.studentRepository.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudentById(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  async updateStudent(id: number, studentDto: StudentDto): Promise<Student> {
    await this.studentRepository.update(id, studentDto);
    return this.studentRepository.findOneBy({ id });
  }

  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
