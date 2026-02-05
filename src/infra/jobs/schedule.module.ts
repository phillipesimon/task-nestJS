import { Module } from '@nestjs/common';
import { NotificationTaskUserSchedule } from './notification-task-user.schedule';
import { ScheduleModule } from '@nestjs/schedule';
import { ITaskUserRepository } from 'src/models/tasks/repositories/task-user.repository';
import { TaskUserPrismaRepository } from 'src/models/tasks/repositories/prisma/task-user.prisma.repostiory';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [
    NotificationTaskUserSchedule,
    {
      provide: ITaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
  controllers: [],
})
export class ScheduleTaskModule {}
