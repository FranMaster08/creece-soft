import { Module } from '@nestjs/common';
import { ConsultorService } from './consultor.service';
import { ConsultorController } from './consultor.controller';

@Module({
  controllers: [ConsultorController],
  providers: [ConsultorService],
})
export class ConsultorModule {}
