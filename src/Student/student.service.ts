import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    console.log(`Updating student with id ${id}`, updateStudentDto);
  
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      console.log(`Student with id ${id} not found`);
      throw new NotFoundException(`Student with id ${id} not found`);
    }
  
    console.log(`Student found:`, student);
  
    await this.studentRepository.update(id, updateStudentDto);
    const updatedStudent = await this.studentRepository.findOneBy({ id });
  
    console.log(`Updated student:`, updatedStudent);
    return updatedStudent;
  }
  
  
}
