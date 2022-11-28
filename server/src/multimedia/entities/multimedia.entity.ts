import { User } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Multimedias')
export class Multimedia {
  @PrimaryGeneratedColumn('uuid')
  idMultimedia: string;

  @Column('text')
  url: string;

  @Column('char')
  type: string;

  @CreateDateColumn()
  createAt: Date;

  @Column('date', { nullable: true })
  updateAt?: Date;

  @ManyToOne(() => User, (user) => user.multimedia)
  user: User;
}
