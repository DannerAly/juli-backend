import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentosGeneradosService } from './documentos_generados.service';
import { CreateDocumentosGeneradoDto } from './dto/create-documentos_generado.dto';
import { UpdateDocumentosGeneradoDto } from './dto/update-documentos_generado.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('documentos-generados')
export class DocumentosGeneradosController {
  constructor(private readonly documentosGeneradosService: DocumentosGeneradosService) {}

  @ApiOperation({ summary: 'Crear un nuevo documento generado' })
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

  @ApiOperation({ summary: 'Actualizar un documento generado por ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentosGeneradoDto: UpdateDocumentosGeneradoDto) {
    return this.documentosGeneradosService.update(+id, updateDocumentosGeneradoDto);
  }

  @ApiOperation({ summary: 'Eliminar un documento generado por ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentosGeneradosService.remove(+id);
  }
}
