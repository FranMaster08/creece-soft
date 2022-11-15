import { Injectable } from '@nestjs/common';
import { ConsultorDto } from './dto/consultor.dto';
import { Consultor } from '../entities/Consultor';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultorService {
  constructor(
    @InjectRepository(Consultor)
    private consultorRepository: Repository<Consultor>,
  ) {}

  create(createConsultorDto: ConsultorDto): Promise<Consultor> {
    return new Promise<Consultor>(async (resolve, reject) => {
      try {
        const data = await this.consultorRepository.save(
          this.covertDtoToEntity(createConsultorDto),
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  findAll(): Promise<Array<Consultor>> {
    return new Promise<Array<Consultor>>(async (resolve, reject) => {
      try {
        const data = await this.consultorRepository.find();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  findOne(nit: number): Promise<Consultor> {
    return new Promise<Consultor>(async (resolve, reject) => {
      try {
        const data = await this.consultorRepository.findOne({
          where: {
            id: nit,
          },
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  update(id: string, updateConsultorDto: ConsultorDto): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      try {
        await this.consultorRepository.update(id, updateConsultorDto);
        const validFormat = {
          data: this.covertDtoToEntity(updateConsultorDto),
        };
        resolve({ id, ...validFormat });
      } catch (error) {
        reject(error);
      }
    });
  }

  remove(id: string) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const data = await this.consultorRepository.delete(id);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  covertDtoToEntity(ConsultorDto: ConsultorDto): Consultor {
    const consultor = new Consultor();
    consultor.nombre = ConsultorDto.nombre;
    consultor.apellido = ConsultorDto.apellido;
    consultor.cedula = ConsultorDto.cedula;
    consultor.direccion = ConsultorDto.direccion;
    return consultor;
  }
}
