import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Countries')
export class Country {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  code: string;
  @Column('text')
  name: string;

  @Column('text')
  flag: string;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
