import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  logIn() {
    return 'Log-in endpoint';
  }

  @Get('singup')
  singup() {
    return this.authService.getUsers();
  }
}
