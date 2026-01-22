import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class ProfileUserUseCase {
  constructor(private userRespository: IUserRepository) {}
  async execute(id: string) {
    return this.userRespository.findById(id);
  }
}
