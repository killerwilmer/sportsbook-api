import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserBet } from './userbet.entity';

@Entity()
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'bet_option' })
  betOption: string;

  @Column({ nullable: true })
  sport: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true, name: 'event_id' })
  eventId: number;

  @Column({ nullable: true })
  odd: number;

  @Column({ nullable: true })
  result: string;

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

  @OneToMany(() => UserBet, (userBet) => userBet.bet)
  userBets: UserBet[];
}
