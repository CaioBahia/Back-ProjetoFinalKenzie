import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsBoolean,
  IsNumber,
  IsUrl,
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
  km: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(48)
  color: string;

  @IsNumber()
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

  @IsString()
  @IsUrl(undefined, { message: 'URL is not valid' })
  @IsNotEmpty()
  cover_img_url: string;
}
