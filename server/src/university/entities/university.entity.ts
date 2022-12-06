import { User } from 'src/auth/entities/user.entity';
import { Country } from 'src/country/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Universities')
export class University {
  @PrimaryGeneratedColumn('uuid')
  idUniversity: string;

  @OneToOne(() => Country, (country) => country.code)
  @JoinColumn()
  country: string;

  @Column('text')
  linkedin: string;

  @Column('text')
  website: string;

  @Column('text')
  description: string;

  @Column('bool')
  acceptConditions: boolean;

  @OneToOne(() => User, (user) => user.university)
  @JoinColumn()
  user: User;
}
