import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServerErrorSwagger } from '../../common/swagger/server-error.swagger';
import { CreateOperationdDto } from './dto/create-operation.dto';
import { OperationdDto } from './dto/operation.dto';
import { OperationService } from './operation.service';

@Controller('api/v1/operation')
@ApiTags('Operation')
export class OperationController {
  private logger: Logger = new Logger(OperationController.name);

  constructor(private readonly operationService: OperationService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar Operação' })
  @ApiResponse({ status: 201, description: 'Operação cadastrada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos' })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
    type: ServerErrorSwagger,
  })
  @UsePipes(ValidationPipe)
  async create(@Body() createOperationDto: CreateOperationdDto) {
    return { ok: true };
  }

  @Get()
  @ApiOperation({ summary: 'Listar Operações' })
  @ApiResponse({
    status: 200,
    description: 'Operações listadas com sucesso',
    type: OperationdDto,
    isArray: true,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
    type: ServerErrorSwagger,
  })
  async get() {
    return { ok: true };
  }
}
