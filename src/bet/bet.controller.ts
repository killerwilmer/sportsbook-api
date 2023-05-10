import { Controller, Post, Body, Param } from '@nestjs/common';
import { BetService } from './bet.service';
import { Bet } from '../entities/bet.entity';

@Controller('bets')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Post(':eventId/place')
  async placeBet(
    @Param('eventId') eventId: number,
    @Body('betOption') betOption: string,
    @Body('amount') amount: number,
    @Body('userId') userId: number,
  ): Promise<any> {
    // Call the placeBet method of the bet service
    const result = await this.betService.placeBet(
      eventId,
      betOption,
      amount,
      userId,
    );
    return result;
  }

  @Post()
  async createBet(@Body() betData: Partial<Bet>): Promise<Bet> {
    return this.betService.createBet(betData);
  }
}
