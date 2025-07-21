import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AudiosService } from './audios.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('audios')
export class AudiosController {
  constructor(private readonly audiosService: AudiosService) {}

  @ApiBody({
    schema: {
      example: {
        usuario_id: 1,
        plantilla_id: 2,
        url_audio: 'https://example.com/audio.mp3',
        procesado: true,
      },
    },
  })
  @ApiOperation({ summary: 'Crear un nuevo audio' })
  @Post()
  create(@Body() createAudioDto: CreateAudioDto) {
    return this.audiosService.create(createAudioDto);
  }

  @ApiOperation({ summary: 'Obtener todos los audios' })
  @Get()
  findAll() {
    return this.audiosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un audio por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audiosService.findOne(+id);
  }

  @ApiBody({
    description: 'Campos a actualizar (todos son opcionales)',
    examples: {
      'Solo URL de audio': {
        summary: 'Actualizar solo la URL del audio',
        value: {
          url_audio: 'https://new-example.com/audio.mp3',
        },
      },
      'Marcar como procesado': {
        summary: 'Cambiar estado de procesado',
        value: {
          procesado: true,
        },
      },
      'Cambiar plantilla': {
        summary: 'Asignar a otra plantilla',
        value: {
          plantilla_id: 5,
        },
      },
      'Actualización parcial': {
        summary: 'Actualizar URL y estado',
        value: {
          url_audio: 'https://updated-audio.com/file.mp3',
          procesado: false,
        },
      },
      'Actualización completa': {
        summary: 'Actualizar todos los campos',
        value: {
          usuario_id: 2,
          plantilla_id: 3,
          url_audio: 'https://complete-update.com/audio.wav',
          procesado: true,
        },
      },
    },
  })
  @ApiOperation({ summary: 'Actualizar un audio por ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioDto: UpdateAudioDto) {
    return this.audiosService.update(+id, updateAudioDto);
  }

  @ApiOperation({ summary: 'Eliminar un audio por ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audiosService.remove(+id);
  }
}
