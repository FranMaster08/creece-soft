import { Injectable } from '@nestjs/common';
import { EmpresaDto } from './dto/empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  create(createEmpresaDto: EmpresaDto): Empresa {
    return new Empresa();
  }

  findAll(): Array<Empresa> {
    return [];
  }

  findOne(id: number): Empresa {
    return new Empresa();
  }

  update(id: number, updateEmpresaDto: EmpresaDto): Empresa {
    return new Empresa();
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
