import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { Roles } from '../roles.decorator';
import { UserRole } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';

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
}
