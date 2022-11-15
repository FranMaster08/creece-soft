import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConsultorService } from './consultor.service';
import { ConsultorDto } from './dto/consultor.dto';
@Controller('consultor')
export class ConsultorController {
  constructor(private readonly consultorService: ConsultorService) {}

  @Post()
  create(@Body() createConsultorDto: ConsultorDto) {
    return this.consultorService.create(createConsultorDto);
  }

  @Get()
  findAll() {
    return this.consultorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultorDto: ConsultorDto) {
    return this.consultorService.update(id, updateConsultorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultorService.remove(id);
  }
}
