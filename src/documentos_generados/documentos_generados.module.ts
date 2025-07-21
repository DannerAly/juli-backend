import { Module } from '@nestjs/common';
import { DocumentosGeneradosService } from './documentos_generados.service';
import { DocumentosGeneradosController } from './documentos_generados.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Module({
  imports: [PrismaModule],
  controllers: [DocumentosGeneradosController],
  providers: [DocumentosGeneradosService, AuthGuard],
})
export class DocumentosGeneradosModule {}
