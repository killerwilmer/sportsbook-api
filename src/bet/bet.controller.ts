import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { validate } from 'class-validator';
import { BetService } from './bet.service';
import { Bet } from '../entities/bet.entity';
import { PlaceBetDto } from './place.dto';
import { JwtAuthGuard } from '../auth.guard';
import { BalanceAuthGuard } from '../balance-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('bets')
@Controller('bets')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @ApiOperation({ summary: 'Make a bet' })
  @UseGuards(JwtAuthGuard, BalanceAuthGuard)
  @Post('place')
  async createPlaceBet(@Body() placeBetDto: PlaceBetDto) {
    const errors = await validate(placeBetDto);
    if (errors.length > 0) {
      return { errors };
    }

    return this.betService.createPlaceBet(placeBetDto);
  }

  @ApiOperation({ summary: 'Create bet' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async createBet(@Body() betData: Partial<Bet>): Promise<Bet> {
    return this.betService.createBet(betData);
  }
}
