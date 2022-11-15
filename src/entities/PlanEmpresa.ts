import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InformacionGeneral } from './InformacionGeneral';

@Index('fk_plan_empresa_empresa1_idx', ['empresaId'], {})
@Entity('plan_empresa', { schema: 'creecedb' })
export class PlanEmpresa {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'descripcion', nullable: true, length: 2 })
  descripcion: string | null;

  @Column('varchar', { primary: true, name: 'empresa_id', length: 255 })
  empresaId: string;

  @ManyToOne(
    () => InformacionGeneral,
    (informacionGeneral) => informacionGeneral.planEmpresas,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'empresa_id', referencedColumnName: 'id' }])
  empresa: InformacionGeneral;
}
