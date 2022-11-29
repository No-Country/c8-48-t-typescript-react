import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Length } from 'class-validator';
import { Athlete } from 'src/athlete/entities/athlete.entity';
import { Multimedia } from '../../multimedia/entities/multimedia.entity';
@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  idUser: string;
  @Column('text')
  fullName: string;
  @Column('text', { unique: true })
  email: string;
  @Column('text', { select: false })
  @Length(8, 16)
  password: string;

  @Column('text', { nullable: true })
  urlProfile?: string;

  @Column('bool', { default: true })
  isActive: boolean;
  @CreateDateColumn()
  createAt: Date;

  @OneToOne(() => Athlete, (athlete) => athlete.user, {
    cascade: true,
  })
  athlete: Athlete;

  @OneToMany(() => Multimedia, (multimedia) => multimedia.user, {
    cascade: true,
  })
  multimedia: Multimedia[];
}
