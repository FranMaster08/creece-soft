import { ApiProperty } from '@nestjs/swagger';

export class ConsultorDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  apellido: string;
  @ApiProperty()
  direccion: string;
  @ApiProperty()
  telefono: string;
  @ApiProperty()
  cedula: string;
}
