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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantillasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlantillaDto: UpdatePlantillaDto,
  ) {
    return this.plantillasService.update(+id, updatePlantillaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantillasService.remove(+id);
  }
}
