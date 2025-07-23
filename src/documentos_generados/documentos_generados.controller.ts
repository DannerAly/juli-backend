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
import { DocumentosGeneradosService } from './documentos_generados.service';
import { CreateDocumentosGeneradoDto } from './dto/create-documentos_generado.dto';
import { UpdateDocumentosGeneradoDto } from './dto/update-documentos_generado.dto';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('documentos-generados')
export class DocumentosGeneradosController {
  constructor(
    private readonly documentosGeneradosService: DocumentosGeneradosService,
  ) {}

  @ApiOperation({ summary: 'Crear un nuevo documento generado' })
  @ApiBody({
    schema: {
      example: {
        audio_id: 1,
        url_docx: 'Documento de prueba para testing',
      },
    },
  })
  @Post()
  create(@Body() createDocumentosGeneradoDto: CreateDocumentosGeneradoDto) {
    return this.documentosGeneradosService.create(createDocumentosGeneradoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los documentos generados' })
  @Get()
  findAll() {
    return this.documentosGeneradosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un documento generado por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentosGeneradosService.findOne(+id);
  }

  @ApiBody({
    description: 'Campos a actualizar (todos son opcionales)',
    examples: {
      'Solo URL del documento': {
        summary: 'Actualizar solo la URL del documento',
        value: {
          url_docx: 'https://nueva-url.com/documento.docx',
        },
      },
      'Solo audio asociado': {
        summary: 'Cambiar el audio asociado',
        value: {
          audio_id: 5,
        },
      },
      'Actualización completa': {
        summary: 'Actualizar todos los campos',
        value: {
          audio_id: 3,
          url_docx: 'https://updated-document.com/nuevo-documento.docx',
        },
      },
    },
  })
  @ApiOperation({ summary: 'Actualizar un documento generado por ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentosGeneradoDto: UpdateDocumentosGeneradoDto,
  ) {
    return this.documentosGeneradosService.update(
      +id,
      updateDocumentosGeneradoDto,
    );
  }

  @ApiOperation({ summary: 'Eliminar un documento generado por el ID:' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentosGeneradosService.remove(+id);
  }
}
