import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { Roles } from '../roles.decorator';
import { UserRole } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { JwtAuthGuard } from '../auth.guard';
import { DepositDto } from './dto/deposit.dto';
import { WithdrawDto } from './dto/withdraw.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<User> {
    return this.usersService.createUser(newUser);
  }

  @UseGuards(JwtAuthGuard)
  @Post('deposit')
  async depositMoney(@Request() req, @Body() depositDto: DepositDto) {
    const userId = req.user.id;
    const { amount } = depositDto;

    return this.usersService.depositMoney(userId, amount);
  }

  @UseGuards(JwtAuthGuard)
  @Post('withdraw')
  async withdrawMoney(@Request() req, @Body() withdrawDto: WithdrawDto) {
    const userId = req.user.id;
    return this.usersService.withdrawMoney(userId, withdrawDto.amount);
  }
}
