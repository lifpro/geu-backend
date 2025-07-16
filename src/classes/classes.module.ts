import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesController } from './classes.controller';
import { Classes } from './classes.entity';
import { ClassesService } from './classes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Classes])],
  providers: [ClassesService],
  controllers: [ClassesController],
})
export class ClassesModule {}
