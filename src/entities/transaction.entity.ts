import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { UserBet } from './userbet.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  amount: number;

  @Column()
  category: string;

  @Column()
  status: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column()
  deleted: boolean;

  @Column({ name: 'deleted_at' })
  deletedAt: Date;

  @Column({ name: 'user_bet_id', nullable: true })
  userBetId: number;

  @ManyToOne(() => User, (user) => user.transaction)
  user: User;

  @ManyToOne(() => UserBet, (userBet) => userBet.transactions)
  userBet: UserBet;
}
