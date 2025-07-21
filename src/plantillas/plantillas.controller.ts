import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlantillasService } from './plantillas.service';
import { CreatePlantillaDto } from './dto/create-plantilla.dto';
import { UpdatePlantillaDto } from './dto/update-plantilla.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('plantillas')
export class PlantillasController {
  constructor(private readonly plantillasService: PlantillasService) {}

  @ApiOperation({ summary: 'Crear una nueva plantilla' })
  @ApiBody({
    schema: {
      example: {
        nombre: 'Plantilla Prueba 1',
        descripcion: "Plantilla de prueba para testing",
        contenido_json: '{"titulo": "{{nombre}}", "experiencia": "{{experiencia}}"}',
        activo: true,
      },
    },
  })
  @Post()
  create(@Body() createPlantillaDto: CreatePlantillaDto) {
    return this.plantillasService.create(createPlantillaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las plantillas' })
  @Get()
  findAll() {
    return this.plantillasService.findAll();
  }

  @ApiOperation({ summary: 'Obtener solo una plantilla'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantillasService.findOne(+id);
  }

  @ApiBody({
  description: 'Campos a actualizar (todos son opcionales)',
  examples: {
    'Solo nombre': {
      summary: 'Actualizar solo el nombre',
      value: {
        nombre: 'Nuevo nombre de plantilla'
      }
    },
    'Solo descripción': {
      summary: 'Actualizar solo la descripción',
      value: {
        descripcion: 'Nueva descripción de la plantilla'
      }
    },
    'Desactivar plantilla': {
      summary: 'Cambiar estado a inactivo',
      value: {
        activo: false
      }
    },
    'Actualización parcial': {
      summary: 'Actualizar nombre y estado',
      value: {
        nombre: 'Plantilla modificada',
        activo: true
      }
    },
    'Actualización completa': {
      summary: 'Actualizar todos los campos',
      value: {
        nombre: 'Plantilla completamente nueva',
        descripcion: 'Descripción actualizada',
        contenido_json: '{"titulo": "{{nuevo_campo}}", "contenido": "{{nuevo_contenido}}"}',
        activo: true
      }
    }
  }
})
  @ApiOperation({ summary: 'Actualizar una plantilla' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlantillaDto: UpdatePlantillaDto,
  ) {
    return this.plantillasService.update(+id, updatePlantillaDto);
  }

  @ApiOperation({ summary: 'Eliminar una plantilla'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantillasService.remove(+id);
  }
}
