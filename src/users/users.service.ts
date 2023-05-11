import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
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

  async depositMoney(userId: number, amount: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const transaction = new Transaction();
    transaction.user = user;
    transaction.amount = amount;
    await this.transactionRepository.save(transaction);

    return {
      message: 'Deposit successful',
      user,
      amount,
    };
  }
}
