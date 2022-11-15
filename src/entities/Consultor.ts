import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('cedula_UNIQUE', ['cedula'], { unique: true })
@Entity('consultor', { schema: 'creecedb' })
export class Consultor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'nombre', nullable: true, length: 100 })
  nombre: string | null;

  @Column('varchar', { name: 'apellido', nullable: true, length: 100 })
  apellido: string | null;

  @Column('varchar', { name: 'direccion', nullable: true, length: 200 })
  direccion: string | null;

  @Column('varchar', { name: 'telefono', nullable: true, length: 45 })
  telefono: string | null;

  @Column('varchar', {
    name: 'cedula',
    nullable: true,
    unique: true,
    length: 45,
  })
  cedula: string | null;
}
