import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { PlantillasModule } from './plantillas/plantillas.module';
import { AudiosModule } from './audios/audios.module';
import { DocumentosGeneradosModule } from './documentos_generados/documentos_generados.module';

@Module({
  imports: [ AuthModule, ConfigModule, PlantillasModule, AudiosModule, DocumentosGeneradosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
