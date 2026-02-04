import { Module } from '@nestjs/common';
import { UserModule } from './models/users/user.module';
import { LoginModule } from './models/login/login.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { TaskUserModule } from './models/tasks/task-user.module';
import { NotificationModule } from './models/notification/notification.module';

@Module({
  imports: [UserModule, LoginModule, TaskUserModule, NotificationModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
