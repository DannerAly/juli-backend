import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { encrypt } from 'src/libs/bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(correo: string, clave: string) {
    try {
      const user = await this.prismaService.usuarios.findUnique({
        where: { correo },
      });

      if (!user)
        throw new BadRequestException('Email o contraseña incorrectos');

      const isPasswordValid = await compare(clave, user.clave);

      if (!isPasswordValid)
        throw new BadRequestException('Email o contraseña incorrectos');

      const payload = { id: user.id_usuario, correo: user.correo };

      const accessToken = await this.jwtService.signAsync(payload);

      return {
        accessToken,
        user: {
          nombre: user.nombre,
          apellido: user.apellido,
          correo: user.correo,
        },
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Error al iniciar sesión: ' + error.message,
      );
    }
  }

  async getUsers() {
    try {
      return await this.prismaService.usuarios.findMany();
    } catch (error) {
      throw new BadRequestException(
        'Error al obtener los usuarios: ' + error.message,
      );
    }
  }

  async singup(
    nombre: string,
    correo: string,
    clave: string,
    apellido?: string,
  ) {
    //console.log('Registro de usuario:', { nombre, apellido, correo, clave });

    try {
      const userFound = await this.prismaService.usuarios.findUnique({
        where: {
          correo,
        },
      });

      if (userFound)
        throw new BadRequestException('El correo ya está registrado');

      const hashedPassword = await encrypt(clave, 10); // Asegúrate de usar un número adecuado para el salt
      const newUser = await this.prismaService.usuarios.create({
        data: {
          nombre,
          correo,
          clave: hashedPassword,
          apellido: apellido ?? '', // Si apellido no se proporciona, se guarda como null
        },
      });

      const { clave: _, ...userWithoutClave } = newUser; // Excluir la clave del objeto de respuesta

      return userWithoutClave;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new Error('Error al registrar el usuario: ' + error);
    }
  }

  async authFirebase(nombre: string, correo: string, apellido?: string) {
    try {
      const user = await this.prismaService.usuarios.findUnique({
        where: {
          correo,
        },
      });

      if (user) {
        const payload = { id: user.id_usuario, correo: user.correo };
        const accessToken = await this.jwtService.signAsync(payload);

        return {
          accessToken,
          user: {
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
          },
        };
      }

      // Usuario no existe - registrar y hacer login
      const newUser = await this.prismaService.usuarios.create({
        data: {
          nombre: nombre,
          correo: correo,
          clave: '', 
          apellido: apellido ?? '',
        },
      });

      // Generar JWT para el nuevo usuario
      const payload = { id: newUser.id_usuario, correo: newUser.correo };
      const accessToken = await this.jwtService.signAsync(payload);

      return {
        accessToken,
        user: {
          nombre: newUser.nombre,
          apellido: newUser.apellido,
          correo: newUser.correo,
        },
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Error en autenticación con Firebase: ' + error.message,
      );
    }
  }
}
