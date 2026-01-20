import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IUserRepository } from 'src/models/users/repositories/user.repository';
import { SignInDTO } from '../dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class SignInUseCase {
  constructor(
    private jwtService: JwtService,
    private userRepository: IUserRepository,
  ) {}

  async execute(data: SignInDTO) {
    const user = await this.userRepository.findByUsername(data.username);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isEqualPassword = await compare(data.password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
