import { Injectable } from '@nestjs/common';
import { EmpresaDto } from './dto/empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  create(createEmpresaDto: EmpresaDto): Promise<Empresa> {
    return new Promise<Empresa>(async (resolve, reject) => {
      try {
        const data = await this.empresaRepository.save(
          this.covertDtoToEntity(createEmpresaDto),
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  findAll(): Promise<Array<Empresa>> {
    return new Promise<Array<Empresa>>(async (resolve, reject) => {
      try {
        const data = await this.empresaRepository.find();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  findOne(nit: string): Promise<Empresa> {
    return new Promise<Empresa>(async (resolve, reject) => {
      try {
        const data = await this.empresaRepository.findOne({
          where: {
            nit_rut: nit,
          },
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  update(id: number, updateEmpresaDto: EmpresaDto): Empresa {
    return new Empresa();
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }

  covertDtoToEntity(empresaDto: EmpresaDto): Empresa {
    const empresa = new Empresa();
    empresa.ciudad = empresaDto.ciudad;
    empresa.contacto = empresaDto.contacto;
    empresa.correo_electronico = empresaDto.correo_electronico;
    empresa.direccion = empresaDto.direccion;
    empresa.doc_identidad = empresaDto.doc_identidad;
    empresa.gestor = empresaDto.gestor;
    empresa.nit_rut = empresaDto.nit_rut;
    empresa.nombre_comercial_del_negocio =
      empresaDto.nombre_comercial_del_negocio;
    empresa.nombre_empresario = empresaDto.nombre_empresario;
    empresa.createdAt = new Date();
    empresa.updatedAt = new Date();
    return empresa;
  }
}
