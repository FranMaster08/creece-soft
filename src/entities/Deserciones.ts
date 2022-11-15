import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { InformacionGeneral } from './InformacionGeneral';

@Index('fk_deserciones_empresa_idx', ['empresaId'], {})
@Entity('deserciones', { schema: 'creecedb' })
export class Deserciones {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'descripcion', length: 100 })
  descripcion: string;

  @Column('varchar', { name: 'motivo_desercion', nullable: true, length: 700 })
  motivoDesercion: string | null;

  @Column('varchar', { name: 'etapa_desercion', nullable: true, length: 300 })
  etapaDesercion: string | null;

  @Column('varchar', { primary: true, name: 'empresa_id', length: 255 })
  empresaId: string;

  @ManyToOne(
    () => InformacionGeneral,
    (informacionGeneral) => informacionGeneral.deserciones,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'empresa_id', referencedColumnName: 'id' }])
  empresa: InformacionGeneral;
}
