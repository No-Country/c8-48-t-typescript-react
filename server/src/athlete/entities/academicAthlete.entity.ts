import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Athlete } from './athlete.entity';
import { StudyLevel } from '../types/studyLevel.type';

@Entity('AcademicAthletes')
export class AcademicAthlete {
  @PrimaryGeneratedColumn('uuid')
  idAcademicAthlete: string;
  @Column({
    type: 'enum',
    enum: StudyLevel,
    default: StudyLevel.SECUNDARIA_INCOMPLETA,
  })
  studyLevel: StudyLevel;
  @Column('numeric', { precision: 5, scale: 2 })
  average: number;
  @Column('text')
  areaInterest: string;
  @Column('text')
  careerInterest: string;

  @OneToOne(() => Athlete, (athlete) => athlete.academicAthlete)
  @JoinColumn({ name: 'idAthlete' })
  athlete: Athlete;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
