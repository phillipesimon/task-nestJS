import { Module } from '@nestjs/common';
import { UserModule } from './models/users/user.module';
import { LoginModule } from './models/login/login.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { TaskUserModule } from './models/tasks/task-user.module';

@Module({
  imports: [UserModule, LoginModule, TaskUserModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
