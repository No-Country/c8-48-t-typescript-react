import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Length } from 'class-validator';
import { Deportista } from 'src/deportista/entities/deportista.entity';
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

  @OneToOne(() => Deportista, (deportista) => deportista.user, {
    cascade: true,
  })
  deportista: Deportista;
  /* idRol: number; */
}
