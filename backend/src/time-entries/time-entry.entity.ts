import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('time_entries')
export class TimeEntry {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '2025-01-15' })
  @Column({ type: 'date' })
  date: string;

  @ApiProperty({ example: 'Viso Internal' })
  @Column()
  project: string;

  @ApiProperty({ example: 5.5 })
  @Column({ type: 'decimal', precision: 5, scale: 2 })
  hours: number;

  @ApiProperty({ example: 'Working on time tracker' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;
}
