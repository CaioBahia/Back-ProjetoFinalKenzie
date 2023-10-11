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

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Title is too short',
  })
  @MaxLength(64, {
    message: 'Title is too long',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsISO8601()
  birthdate: Date;

  @IsString()
  type: string;

  @IsString()
  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
