import { IsNotEmpty, IsNumber } from 'class-validator';

export class PlaceBetDto {
  @IsNotEmpty()
  userId: number;
  @IsNotEmpty()
  betId: number;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
