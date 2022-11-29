import { User } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Athletes')
export class Athlete {
  @PrimaryGeneratedColumn('uuid')
  idAthlete: string;

  @Column('smallint')
  age: number;

  @Column('int')
  idCountry: number;

  @Column({ type: 'numeric', precision: 5, scale: 2 })
  height: number;

  @Column('numeric', { precision: 5, scale: 2 })
  weight: number;

  @Column('bool')
  leadership: boolean;

  @Column('bool')
  temperance: boolean;

  @Column('varchar', {
    length: 255,
  })
  gameVision: string;

  @Column('varchar', {
    length: 255,
  })
  strength: string;

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updateAt: Date;

  @OneToOne(() => User, (user) => user.athlete)
  @JoinColumn()
  user: User;
}
