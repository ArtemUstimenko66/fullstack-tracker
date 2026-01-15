import { Module } from '@nestjs/common';
import { TimeEntriesController } from './time-entries.controller';
import { TimeEntriesService } from './time-entries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeEntry } from './time-entry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimeEntry])
  ],
  controllers: [TimeEntriesController],
  providers: [TimeEntriesService]
})
export class TimeEntriesModule {}
