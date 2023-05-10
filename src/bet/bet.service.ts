import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bet } from '../entities/bet.entity';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bet)
    private readonly betRepository: Repository<Bet>,
  ) {}

  async placeBet(
    eventId: number,
    betOption: string,
    amount: number,
    userId: number,
  ): Promise<any> {
    // Implement the logic to place a bet on a specific event
    // Save the bet details to the database
    // Perform any necessary operations

    const bet = new Bet();
    bet.betOption = betOption;
    bet.eventId = eventId;
    // Set other bet properties

    // Save the bet to the database
    const savedBet = await this.betRepository.save(bet);

    return {
      success: true,
      message: 'Bet placed successfully',
      data: savedBet,
    };
  }

  async createBet(betData: Partial<Bet>): Promise<Bet> {
    const newBet = this.betRepository.create(betData);
    return this.betRepository.save(newBet);
  }
}
