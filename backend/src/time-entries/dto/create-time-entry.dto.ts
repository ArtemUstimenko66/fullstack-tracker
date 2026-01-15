import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeEntryDto {
  @ApiProperty({ example: '2025-01-15' })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiProperty({ example: 'Viso Internal' })
  @IsNotEmpty()
  @IsString()
  project: string;

  @ApiProperty({ example: 5.5, minimum: 0.01, maximum: 24 })
  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  @Max(24)
  hours: number;

  @ApiProperty({ example: 'Working on time tracker' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
