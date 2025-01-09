import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';  // Import StudentModule after TypeOrmModule
import { Student } from './student/student.entity';  // Import Student entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',  
      database: 'assignment_student_db', 
      entities: [Student],
      synchronize: true,
    }),
    StudentModule,
  ],
})
export class AppModule {}
