import { IsNotEmpty, IsNumber } from 'class-validator';

export class WithdrawDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
