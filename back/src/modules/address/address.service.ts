import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async create(createAddressDto: CreateAddressDto, user_id: string) {
    const address = await this.addressRepository.create(
      createAddressDto,
      user_id,
    );

    return address;
  }

  async findByUser(user_id: string) {
    const findByOwner = await this.addressRepository.findByUser(user_id);
    return findByOwner;
  }
  async update(data: UpdateAddressDto, id: string) {
    const address = await this.addressRepository.update(data, id);
    if (!address) {
      throw new NotFoundException('Anouncement not found!');
    }
    return address;
  }
}
