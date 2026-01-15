import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeEntry } from './time-entry.entity';
import { CreateTimeEntryDto } from './dto/create-time-entry.dto';

@Injectable()
export class TimeEntriesService {
  constructor(
    @InjectRepository(TimeEntry)
    private readonly timeEntryRepository: Repository<TimeEntry>,
  ) {}

  async create(createTimeEntryDto: CreateTimeEntryDto): Promise<TimeEntry> {
    const totalHours = await this.getTotalHoursForDate(createTimeEntryDto.date);

    if (totalHours + createTimeEntryDto.hours > 24) {
      throw new BadRequestException(
        `Cannot add ${createTimeEntryDto.hours}h. Total for ${createTimeEntryDto.date} would exceed 24h.`,
      );
    }

    const timeEntry = this.timeEntryRepository.create(createTimeEntryDto);
    return this.timeEntryRepository.save(timeEntry);
  }

  async findAll(): Promise<TimeEntry[]> {
    return this.timeEntryRepository.find({
      order: {
        date: 'DESC',
        createdAt: 'DESC',
      },
    });
  }

  private async getTotalHoursForDate(date: string): Promise<number> {
    const result = await this.timeEntryRepository
      .createQueryBuilder('entry')
      .select('SUM(entry.hours)', 'total')
      .where('entry.date = :date', { date })
      .getRawOne();

    return parseFloat(result?.total || '0');
  }
}
