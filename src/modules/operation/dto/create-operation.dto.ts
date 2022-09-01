import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOperationdDto {
  @ApiPropertyOptional()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
