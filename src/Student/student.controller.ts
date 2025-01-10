import { Controller, Param, Put, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Delete } from '@nestjs/common';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.studentService.remove(id);
    return { message: 'Student deleted successfully' };
  }
}
