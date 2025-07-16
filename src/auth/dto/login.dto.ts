import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Debe enviarse un email Valido' })
  correo: string;

  @IsString()
  clave: string;
}
