import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Bet } from './bet.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class UserBet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  odd: number;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  state: string;

  @Column({
    nullable: true,
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({ nullable: true, name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @Column({ nullable: true })
  deleted: boolean;

  @Column({ nullable: true, name: 'deleted_at', type: 'datetime' })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.user_bets)
  user: User;

  @ManyToOne(() => Bet, (bet) => bet.userBets)
  bet: Bet;

  @OneToMany(() => Transaction, (transaction) => transaction.userBet)
  transactions: Transaction[];
}
