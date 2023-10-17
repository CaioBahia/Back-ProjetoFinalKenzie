import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../address.repository';
import { PrismaService } from 'src/modules/database/prisma.service';
import { CreateAddressDto } from '../../dto/create-address.dto';
import { Address } from '../../entities/address.entity';
import { UpdateAddressDto } from '../../dto/update-address.dto';

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAddressDto, user_id: string): Promise<Address> {
    const address = new Address();
    Object.assign(address, { ...data });
    const CreateAddress = await this.prisma.address.create({
      data: {
        id: address.id,
        zipcode: address.zipcode,
        state: address.state,
        city: address.city,
        street: address.street,
        number: address.number,
        complement: address.complement,
        user_id,
      },
    });
    return CreateAddress;
  }

  async findByUser(user_id: string): Promise<Address> {
    const address = await this.prisma.address.findUnique({
      where: { user_id },
    });
    return address;
  }

  async update(data: UpdateAddressDto, id: string): Promise<Address> {
    const address = await this.prisma.address.update({
      where: { id },
      data: { ...data },
    });
    return address;
  }
}
