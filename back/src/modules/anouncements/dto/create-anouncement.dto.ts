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
} from 'class-validator';

export class CreateAnouncementDto {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipe?: number;
  price: number;
  description: string;
  adStatus: string;
  user_id?: string;
}
