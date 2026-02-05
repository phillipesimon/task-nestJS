import { Module } from '@nestjs/common';
import { UserModule } from './models/users/user.module';
import { LoginModule } from './models/login/login.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { TaskUserModule } from './models/tasks/task-user.module';
import { ScheduleTaskModule } from './infra/jobs/schedule.module';
import { PrismaModule } from './infra/database/prisma.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    LoginModule,
    TaskUserModule,
    ScheduleTaskModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
