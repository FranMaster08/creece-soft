import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './empresa/entities/empresa.entity';

@Module({
  imports: [
    EmpresaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'fran',
      password: '1234',
      database: 'creecedb',
      entities: [Empresa],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
