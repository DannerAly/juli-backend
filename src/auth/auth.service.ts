import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  /*getUsers() {
    return this.prismaService.usuarios.findMany();
  }*/
  async getUsers() {
    try {
        return await this.prismaService.usuarios.findMany();
    } catch (error) {
        throw new BadRequestException('Error al obtener los usuarios: ' + error.message);
    }
  }

  async singup(nombre: string, correo: string, clave: string, apellido?: string,) {
    //console.log('Registro de usuario:', { nombre, apellido, correo, clave });

    try {
      const userFound = await this.prismaService.usuarios.findUnique({
        where: {
          correo,
        },
      });

      if (userFound)
        throw new BadRequestException('El correo ya está registrado');

      const newUser = await this.prismaService.usuarios.create({
        data: {
          nombre,
          correo,
          clave,
          apellido: apellido ?? '', // Si apellido no se proporciona, se guarda como null
        },
      });

      return newUser;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new Error('Error al registrar el usuario: ' + error);
    }
  }
}
