import { Module } from '@nestjs/common';
import { UserModule } from './models/users/user.module';
import { LoginModule } from './models/login/login.module';

@Module({
  imports: [UserModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
