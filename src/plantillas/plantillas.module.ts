import { Module } from '@nestjs/common';
import { PlantillasService } from './plantillas.service';
import { PlantillasController } from './plantillas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Module({
  imports: [PrismaModule],
  controllers: [PlantillasController],
  providers: [PlantillasService, AuthGuard],
})
export class PlantillasModule {}
