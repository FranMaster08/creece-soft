import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Deserciones } from './Deserciones';
import { PlanEmpresa } from './PlanEmpresa';

@Index('id_UNIQUE', ['id'], { unique: true })
@Index('nit_rut_UNIQUE', ['nit_rut'], { unique: true })
@Index('correo_electronico_UNIQUE', ['correo_electronico'], { unique: true })
@Entity('informacion_general', { schema: 'creecedb' })
export class InformacionGeneral {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'gestor', nullable: true, length: 255 })
  gestor: string | null;

  @Column('varchar', {
    name: 'nit_rut',
    nullable: true,
    unique: true,
    length: 255,
  })
  nit_rut: string | null;

  @Column('varchar', {
    name: 'nombre_comercial_del_negocio',
    nullable: true,
    length: 255,
  })
  nombre_comercial_del_negocio: string | null;

  @Column('varchar', { name: 'contacto', nullable: true, length: 255 })
  contacto: string | null;

  @Column('varchar', {
    name: 'correo_electronico',
    nullable: true,
    unique: true,
    length: 255,
  })
  correo_electronico: string | null;

  @Column('varchar', { name: 'ciudad', nullable: true, length: 255 })
  ciudad: string | null;

  @Column('varchar', { name: 'nombre_empresario', nullable: true, length: 255 })
  nombre_empresario: string | null;

  @Column('varchar', { name: 'direccion', nullable: true, length: 255 })
  direccion: string | null;

  @Column('varchar', { name: 'doc_identidad', nullable: true, length: 255 })
  doc_identidad: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Deserciones, (deserciones) => deserciones.empresa)
  deserciones: Deserciones[];

  @OneToMany(() => PlanEmpresa, (planEmpresa) => planEmpresa.empresa)
  planEmpresas: PlanEmpresa[];
}
