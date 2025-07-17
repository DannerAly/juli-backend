import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  clave: string;
}
