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

@Entity('Athletes')
export class Athlete {
  @PrimaryGeneratedColumn('uuid')
  idAthlete: string;

  @Column('smallint', { nullable: true })
  age: number;

  @OneToOne(() => Country, (country) => country.code)
  @JoinColumn()
  idCountry: string;

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

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updateAt: Date;

  @OneToOne(() => User, (user) => user.athlete)
  @JoinColumn()
  user: User;
}
