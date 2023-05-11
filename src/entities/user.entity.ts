import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserBet } from './userbet.entity';
import { Transaction } from './transaction.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({ nullable: false })
  public role: string;
  @Column({ nullable: false })
  public first_name: string;
  @Column({ nullable: true })
  public last_name: string;
  @Column({ nullable: true })
  public phone: string;
  @Column({ nullable: true })
  public email: string;
  @Column({ unique: true })
  public username: string;
  @Column({ nullable: true })
  public password: string;
  @Column({ nullable: true })
  public address: string;
  @Column({ nullable: true })
  public gender: string;
  @Column({ nullable: true })
  public birth_date: Date;
  @Column({ nullable: true })
  public country_id: number;
  @Column({ nullable: true })
  public cash_on_hand: number;
  @Column({ nullable: true })
  public city: string;
  @Column({ nullable: true })
  public category: string;
  @Column({ nullable: true })
  public document_id: string;
  @Column({ nullable: true })
  public user_state: string;
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  public created_at: Date;
  @Column({ type: 'datetime', nullable: true })
  public updated_at: Date;
  @Column({ type: 'datetime', nullable: true })
  public deleted_at: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  @OneToMany(() => UserBet, (userBet) => userBet.user)
  user_bets: UserBet[];
}
