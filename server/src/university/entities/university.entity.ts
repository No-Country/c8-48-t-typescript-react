import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Universities')
export class University {
  @PrimaryGeneratedColumn('uuid')
  idUniversity: string;

  @Column('int')
  idCountry: number;

  @Column({ type: 'text', length: 255 })
  linkedin: string;

  @Column({ type: 'text', length: 255 })
  website: string;

  @Column({ type: 'text', length: 255 })
  description: string;

  @Column('bool')
  acceptConditions: boolean;

  //TODO: Relación con user
}
