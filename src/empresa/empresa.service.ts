import { Injectable } from '@nestjs/common';
import { EmpresaDto } from './dto/empresa.dto';
import { InformacionGeneral as Empresa } from '../entities/InformacionGeneral';
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
            id: nit,
          },
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  update(id: string, updateEmpresaDto: EmpresaDto): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      try {
        await this.empresaRepository.update(id, updateEmpresaDto);
        const validFormat = {
          data: this.covertDtoToEntity(updateEmpresaDto),
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
        const data = await this.empresaRepository.delete(id);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
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
    //TODO: Investigar mejor forma de agregar hora de creacion , cuando se actualiza se borra
    empresa.createdAt = new Date();
    empresa.updatedAt = new Date();
    return empresa;
  }
}
