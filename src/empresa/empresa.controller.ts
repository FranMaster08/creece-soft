import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaDto } from './dto/empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('empresa')
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  create(@Body() createEmpresaDto: EmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  findAll(): Promise<Array<Empresa>> {
    return this.empresaService.findAll();
  }

  @Get(':nit')
  findOne(@Param('nit') nit: string): Promise<Empresa> {
    return this.empresaService.findOne(nit);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpresaDto: EmpresaDto,
  ): Empresa {
    return this.empresaService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }
}
