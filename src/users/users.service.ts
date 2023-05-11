import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const { password, ...userData } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      password: hashedPassword,
      ...userData,
    });
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }
}
