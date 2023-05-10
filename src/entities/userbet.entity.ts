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

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'bet_id' })
  betId: number;

  @Column()
  odd: number;

  @Column()
  amount: number;

  @Column()
  state: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column()
  deleted: boolean;

  @Column({ name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.userBets)
  user: User;

  @ManyToOne(() => Bet, (bet) => bet.userBets)
  bet: Bet;

  @OneToMany(() => Transaction, (transaction) => transaction.userBet)
  transactions: Transaction[];
}
