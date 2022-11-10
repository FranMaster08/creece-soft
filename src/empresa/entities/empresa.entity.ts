import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar')
  gestor: string;
  @Column('varchar')
  nit_rut: string;
  @Column('varchar')
  nombre_comercial_del_negocio: string;
  @Column('varchar')
  contacto: string;
  @Column('varchar')
  correo_electronico: string;
  @Column('varchar')
  direccion: string;
  @Column('varchar')
  ciudad: string;
  @Column('varchar')
  nombre_empresario: string;
  @Column('varchar')
  doc_identidad: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
