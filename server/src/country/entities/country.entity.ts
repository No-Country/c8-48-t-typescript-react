import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Countries')
export class Country {
  @PrimaryColumn('text')
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
