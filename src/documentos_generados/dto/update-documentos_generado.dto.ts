import { PartialType } from '@nestjs/swagger';
import { CreateDocumentosGeneradoDto } from './create-documentos_generado.dto';

export class UpdateDocumentosGeneradoDto extends PartialType(CreateDocumentosGeneradoDto) {}
