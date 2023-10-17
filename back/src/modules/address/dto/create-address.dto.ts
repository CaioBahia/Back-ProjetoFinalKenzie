import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  zipcode: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  complement: string;
}
