import { ApiProperty } from '@nestjs/swagger';

export class ServerErrorSwagger {
  @ApiProperty()
  error: string;
}
