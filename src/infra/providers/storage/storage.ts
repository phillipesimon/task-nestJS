import { FileDTO } from 'src/models/users/dto/user.dto';

export abstract class IStorage {
  abstract upload(file: FileDTO, folder: string): Promise<any>;
}
