import { IStorage } from 'src/infra/providers/storage/storage';
import { IUserRepository } from '../repositories/user.repository';
import { AvatarDTO } from '../dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadAvatarUserUseCase {
  constructor(
    private storage: IStorage,
    private userRespository: IUserRepository,
  ) {}

  async execute(data: AvatarDTO) {
    const file = await this.storage.upload(data.file, 'avatar');
    console.log(file);
    return file;
  }
}
