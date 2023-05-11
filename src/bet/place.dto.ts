import { IsNotEmpty } from 'class-validator';

export class PlaceBetDto {
  @IsNotEmpty()
  userId: number;
  @IsNotEmpty()
  betId: number;
  amount: number;
}
