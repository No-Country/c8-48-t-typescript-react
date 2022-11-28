import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsOptional, Length } from 'class-validator';
import { Deportista } from 'src/deportista/entities/deportista.entity';
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
  urlPerfil?: string;

  @Column('bool', { default: true })
  isActive: boolean;
  @CreateDateColumn()
  createAt: Date;

  @OneToOne(() => Deportista, (deportista) => deportista.user, {
    cascade: true,
  })
  deportista: Deportista;

  @OneToMany(() => Multimedia, (multimedia) => multimedia.user, {
    cascade: true,
  })
  multimedia: Multimedia[];
}
