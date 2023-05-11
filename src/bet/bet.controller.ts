import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { validate } from 'class-validator';
import { BetService } from './bet.service';
import { Bet } from '../entities/bet.entity';
import { PlaceBetDto } from './place.dto';
import { JwtAuthGuard } from '../auth.guard';

@Controller('bets')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @UseGuards(JwtAuthGuard)
  @Post('place')
  async createPlaceBet(@Body() placeBetDto: PlaceBetDto) {
    const errors = await validate(placeBetDto);
    console.log(errors);
    if (errors.length > 0) {
      return { errors };
    }

    return this.betService.createPlaceBet(placeBetDto);
  }

  @Post()
  async createBet(@Body() betData: Partial<Bet>): Promise<Bet> {
    return this.betService.createBet(betData);
  }
}
