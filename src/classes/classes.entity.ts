import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Classes {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
}
