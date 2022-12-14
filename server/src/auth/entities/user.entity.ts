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
import { University } from '../../university/entities/university.entity';
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

  @Column('text')
  rol: string;

  @CreateDateColumn()
  createAt: Date;

  @OneToOne(() => Athlete, (athlete) => athlete.user, {
    cascade: true,
  })
  athlete: Athlete;

  @OneToOne(() => University, (university) => university.user, {
    cascade: true,
  })
  university: University;

  @OneToMany(() => Multimedia, (multimedia) => multimedia.user, {
    cascade: true,
  })
  multimedia: Multimedia[];
}
