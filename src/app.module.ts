import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [StudentModule, ClassesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
