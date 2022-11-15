import { Module } from '@nestjs/common';
import { ConsultorService } from './consultor.service';
import { ConsultorController } from './consultor.controller';
import { Consultor } from 'src/entities/Consultor';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Consultor])],
  controllers: [ConsultorController],
  providers: [ConsultorService],
})
export class ConsultorModule {}
