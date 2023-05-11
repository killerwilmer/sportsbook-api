import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Transaction } from '../entities/transaction.entity';
import { BalanceAuthGuard } from '../balance-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User, Transaction])],
  controllers: [UsersController],
  providers: [UsersService, BalanceAuthGuard],
  exports: [BalanceAuthGuard, UsersService],
})
export class UsersModule {}
