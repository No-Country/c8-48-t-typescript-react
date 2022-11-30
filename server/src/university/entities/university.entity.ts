import { User } from 'src/auth/entities/user.entity';
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

  @Column('int')
  idCountry: number;

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
