import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Classes } from './classes.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Classes)
    private classesRepository: Repository<Classes>,
  ) {}
  create(o: Classes): Promise<Classes> {
    return this.classesRepository.save(o);
  }
  read(): Promise<Classes[]> {
    return this.classesRepository.find();
  }
  update(id: number, o): Promise<Classes> {
    return this.classesRepository.save({ ...o, id });
  }
  delete(id: number): Promise<void> {
    return this.classesRepository.delete(id).then(() => undefined);
  }
  findById(id: number): Promise<Classes> {
    return this.classesRepository.findOneBy({ id });
  }
}
