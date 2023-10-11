import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateAnouncementDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(24)
  brand: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(48)
  model: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(9)
  year: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(1)
  km: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(48)
  color: string;

  @IsNumber()
  @IsNotEmpty()
  fipe: number | null;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  adStatus: boolean;
}
