import { IStorage } from 'src/infra/providers/storage/storage';
import { IUserRepository } from '../repositories/user.repository';
import { AvatarDTO } from '../dto/user.dto';
import { Injectable } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class UploadAvatarUserUseCase {
  constructor(
    private storage: IStorage,
    private userRespository: IUserRepository,
  ) {}

  async execute(data: AvatarDTO) {
    const extFile = extname(data.file.originalname);
    const transform = `${data.idUser}${extFile}`;
    data.file.originalname = transform;
    const file = await this.storage.upload(data.file, 'avatar');

    const pathAvatarUser = `avatar/${data.file.originalname}`;

    await this.userRespository.uploadAvatar(data.idUser, pathAvatarUser);

    return file;
  }
}
