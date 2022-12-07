import { User } from 'src/auth/entities/user.entity';
import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AcademicAthlete } from './academicAthlete.entity';

@Entity('Athletes')
export class Athlete {
  @PrimaryGeneratedColumn('uuid')
  idAthlete: string;

  @Column('smallint', { nullable: true })
  age: number;

  @OneToOne(() => Country, (country) => country.code)
  @JoinColumn()
  country: string;

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

  @OneToOne(() => AcademicAthlete, (academicAthlete) => academicAthlete.athlete)
  academicAthlete: AcademicAthlete;

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updateAt: Date;

  @OneToOne(() => User, (user) => user.athlete)
  @JoinColumn()
  user: User;
}
