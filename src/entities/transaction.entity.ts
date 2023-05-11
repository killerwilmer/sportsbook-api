import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { UserBet } from './userbet.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  status: string;

  @Column({
    nullable: true,
    type: 'datetime',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({ nullable: true, type: 'datetime', name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true })
  deleted: boolean;

  @Column({ nullable: true, type: 'datetime', name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @ManyToOne(() => UserBet, (userBet) => userBet.transactions)
  userBet: UserBet;
}
