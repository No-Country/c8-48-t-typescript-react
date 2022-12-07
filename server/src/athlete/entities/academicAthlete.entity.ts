import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Athlete } from './athlete.entity';

type studyLevel = 'SECUNDARIO INCOMPLETA' | 'SECUNDARIA COMPLETA';

@Entity('AcademicAthletes')
export class AcademicAthlete {
  @PrimaryGeneratedColumn('uuid')
  idAcademicAthlete: string;
  @Column('text')
  studyLevel: studyLevel;
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
