import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  logIn() {
    return 'Log-in endpoint';
  }

  @Get('users')
  getUsers() {
    return this.authService.getUsers();
  }

  @Post('sing-up')
  singup(@Body() usuario: RegisterAuthDto) {
    console.log(usuario);
    return this.authService.singup(usuario.nombre, usuario.correo, usuario.clave, usuario.apellido);
  }
}
