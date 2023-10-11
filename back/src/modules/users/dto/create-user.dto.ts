export class CreateUserDto {
  name: string;
  email: string;
  cpf: string;
  phone: number;
  birthdate: Date;
  type: string;
  password: string;
  addressID: string;
}
