import { User } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Deportistas')
export class Deportista {
  @PrimaryGeneratedColumn('uuid')
  idDeportista: string;

  @Column('smallint')
  age: number;

  @Column('int')
  idPais: number;

  @Column({ type: 'numeric', precision: 5, scale: 2 })
  altura: number;

  @Column('numeric', { precision: 5, scale: 2 })
  peso: number;

  @Column('bool')
  liderazgo: boolean;

  @Column('bool')
  templaza: boolean;

  @Column('varchar', {
    length: 255,
  })
  visionJuego: string;

  @Column('varchar', {
    length: 255,
  })
  fortaleza: string;

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updateAt: Date;

  @OneToOne(() => User, (user) => user.deportista)
  @JoinColumn()
  user: User;
}
