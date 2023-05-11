import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { Bet } from '../entities/bet.entity';
import { User } from '../entities/user.entity';
import { UserBet } from '../entities/userbet.entity';
import { Transaction } from '../entities/transaction.entity';
import { UsersService } from '../users/users.service';
import { BalanceAuthGuard } from '../balance-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Bet, User, UserBet, Transaction])],
  providers: [BetService, BalanceAuthGuard, UsersService],
  controllers: [BetController],
  exports: [BalanceAuthGuard, UsersService],
})
export class BetModule {}
