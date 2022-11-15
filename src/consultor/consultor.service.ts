import { Injectable } from '@nestjs/common';
import { ConsultorDto } from './dto/consultor.dto';

@Injectable()
export class ConsultorService {
  create(createConsultorDto: ConsultorDto) {
    return 'This action adds a new consultor';
  }

  findAll() {
    return [{ id: 1, name: 'id', description: 'dato' }];
  }

  findOne(id: number) {
    return `This action returns a #${id} consultor`;
  }

  update(id: number, updateConsultorDto: ConsultorDto) {
    return `This action updates a #${id} consultor`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultor`;
  }
}
