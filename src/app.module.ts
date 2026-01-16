import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
