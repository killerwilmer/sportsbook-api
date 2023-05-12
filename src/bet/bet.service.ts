import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bet } from '../entities/bet.entity';
import { PlaceBetDto } from './place.dto';
import { User } from '../entities/user.entity';
import { UserBet } from '../entities/userbet.entity';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
    @InjectRepository(UserBet)
    private readonly userBetRepository: Repository<UserBet>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async createPlaceBet(placeBetDto: PlaceBetDto) {
    const { userId, betId, amount, state } = placeBetDto;
    let user: User;
    let bet: Bet;

    // Obtener el usuario y la apuesta
    try {
      user = await this.userRepository.findOneOrFail({
        where: { id: userId },
      });
    } catch (error) {
      return {
        error: 'El usuario no existe',
      };
    }
    try {
      bet = await this.betRepository.findOneOrFail({
        where: { id: betId },
      });
    } catch (error) {
      return {
        error: 'La apuesta no existe',
      };
    }

    // Crear una nueva apuesta y establecer las relaciones
    const userBet = new UserBet();
    userBet.user = user;
    userBet.bet = bet;
    userBet.amount = amount;
    userBet.state = state;

    const savedUserBet = await this.userBetRepository.save(userBet);

    const transaction = new Transaction();
    transaction.user = user;
    transaction.amount = amount;
    transaction.category = 'bet';
    transaction.status = 'pending';
    transaction.userBet = userBet;
    // Guardar la transacción
    const savedTransaction = await this.transactionRepository.save(transaction);

    // Guardar la apuesta en la base de datos
    return {
      userBet: savedUserBet,
      transaction: savedTransaction,
    };
  }

  async createBet(betData: Partial<Bet>): Promise<Bet> {
    const newBet = this.betRepository.create(betData);
    return this.betRepository.save(newBet);
  }
}
