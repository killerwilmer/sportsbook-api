import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { Bet } from '../entities/bet.entity';
import { User } from '../entities/user.entity';
import { UserBet } from '../entities/userbet.entity';
import { Transaction } from '../entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bet, User, UserBet, Transaction])],
  providers: [BetService],
  controllers: [BetController],
})
export class BetModule {}
