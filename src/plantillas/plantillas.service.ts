import { Injectable } from '@nestjs/common';
import { CreatePlantillaDto } from './dto/create-plantilla.dto';
import { UpdatePlantillaDto } from './dto/update-plantilla.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlantillasService {
  constructor(private prismaService: PrismaService) {}

  create(createPlantillaDto: CreatePlantillaDto) {
    return this.prismaService.plantillas.create({
      data: {
        ...createPlantillaDto,
        fecha_creacion: new Date(),
        fecha_modificacion: new Date(),
      },
    });
  }

  findAll() {
    return this.prismaService.plantillas.findMany();
  }

  findOne(id: number) {
    return this.prismaService.plantillas.findUnique({
      where: { id_plantilla: id },
    });
  }

  update(id: number, updatePlantillaDto: UpdatePlantillaDto) {
    return this.prismaService.plantillas.update({
      where: { id_plantilla: id },
      data: {
        ...updatePlantillaDto,
        fecha_modificacion: new Date(),
      }
    });
  }

  remove(id: number) {
    return this.prismaService.plantillas.delete({
      where: { id_plantilla: id },
    });
  }
}
