import { ApiProperty } from '@nestjs/swagger';

export class EmpresaDto {
  @ApiProperty()
  gestor: number;
  @ApiProperty()
  nit_rut: string;
  @ApiProperty()
  nombre_comercial_del_negocio: string;
  @ApiProperty()
  contacto: string;
  @ApiProperty()
  correo_electronico: string;
  @ApiProperty()
  direccion: string;
  @ApiProperty()
  ciudad: string;
  @ApiProperty()
  nombre_empresario: string;
  @ApiProperty()
  doc_identidad: string;
}
