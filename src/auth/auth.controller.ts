import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({
    schema: {
      example: {
        correo: 'danner@gmail.com',
        clave: 'abelalydel',
      },
    },
})
  @ApiOperation({ summary: 'Iniciar Sesion' })
  @Post('log-in')
  logIn(@Body() usuario: LoginAuthDto) {
    return this.authService.login(usuario.correo, usuario.clave);
  }

  @ApiBody({
    schema: {
      example: {
        correo: 'danner@gmail.com',
        clave: 'abelalydel',
        apellido: 'Aly',
        nombre: 'danner',
      },
    },
  })
  @ApiOperation({ summary: 'Registrarse' })
  @Post('sing-up')
  singup(@Body() usuario: RegisterAuthDto) {
    console.log(usuario);
    return this.authService.singup(
      usuario.nombre,
      usuario.correo,
      usuario.clave,
      usuario.apellido,
    );
  }

  @Post('auth-firebase')
  @ApiOperation({ summary: 'Autenticación con Firebase' })
  authFirebase(@Body() usuario: RegisterAuthDto) {
    return this.authService.authFirebase(
      usuario.nombre,
      usuario.correo,
      usuario.apellido,
    );

  }

  
}
