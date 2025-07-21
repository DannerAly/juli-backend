import { Injectable } from '@nestjs/common';
import { CreateDocumentosGeneradoDto } from './dto/create-documentos_generado.dto';
import { UpdateDocumentosGeneradoDto } from './dto/update-documentos_generado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocumentosGeneradosService {
  constructor(private prismaService: PrismaService) {}

  create(createDocumentosGeneradoDto: CreateDocumentosGeneradoDto) {
    return this.prismaService.documentos_generados.create({
      data: {
        ...createDocumentosGeneradoDto,
        fecha_creacion: new Date(),
      }
    });
  }

  findAll() {
    return this.prismaService.documentos_generados.findMany();
  }

  findOne(id: number) {
    return this.prismaService.documentos_generados.findUnique({
      where: { id_documento: id}
    });
  }

  update(id: number, updateDocumentosGeneradoDto: UpdateDocumentosGeneradoDto) {
    return this.prismaService.documentos_generados.update({
      where: { id_documento: id },
      data: {
        ...updateDocumentosGeneradoDto,
      }
    });
  }

  remove(id: number) {
    return this.prismaService.documentos_generados.delete({
      where: { id_documento: id }
    });
  }
}
