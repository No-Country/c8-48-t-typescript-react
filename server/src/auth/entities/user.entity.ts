import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Length } from 'class-validator';
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
  @Column('bool', { default: true })
  isActive: boolean;
  @CreateDateColumn()
  createAt: Date;

  /* idRol: number; */
}
