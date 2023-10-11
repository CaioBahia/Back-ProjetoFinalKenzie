import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Length,
  IsOptional,
  Matches,
  IsISO8601,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateAnouncementDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  fipe: number | null;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  adStatus: boolean;
}
