import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { University } from './university.entity';

@Entity('ScholarshipUniversities')
export class ScholarshipUniversity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('smallint', { nullable: true })
  age: number;
  @Column({ type: 'numeric', precision: 5, scale: 2, nullable: true })
  height: number;
  @Column('numeric', { precision: 5, scale: 2, nullable: true })
  weight: number;
  @Column('bool', { nullable: true })
  leadership: boolean;
  @Column('bool', { nullable: true })
  temperance: boolean;
  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  gameVision: string;
  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  strength: string;
  @Column('text', { nullable: true })
  position: string;

  @Column('text', { nullable: true })
  leg: string;

  @Column('int', { nullable: true })
  acceleration: number;

  @Column('int', { nullable: true })
  speed: number;

  @Column('int', { nullable: true })
  jump: number;

  @Column('int', { nullable: true })
  shot: number;

  @Column('int', { nullable: true })
  passes: number;
  @Column('int', { nullable: true })
  quite: number;
  @ManyToOne(() => University)
  @JoinColumn()
  university: University;
}
