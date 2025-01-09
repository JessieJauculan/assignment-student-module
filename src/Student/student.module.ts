import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';  // Correct import of Student entity
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],  // Import the repository here
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
