import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class BalanceAuthGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();
    const userId = request.user.userId;
    const amount = request.body.amount;

    try {
      const hasEnoughBalance = await this.usersService.checkUserBalance(
        userId,
        amount,
      );

      if (!hasEnoughBalance) {
        throw new HttpException('Insufficient balance', HttpStatus.FORBIDDEN);
      }

      return true;
    } catch (error) {
      throw new HttpException(
        'Error checking balance',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
