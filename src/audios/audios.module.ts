import { Module } from '@nestjs/common';
import { AudiosService } from './audios.service';
import { AudiosController } from './audios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Module({
  imports: [PrismaModule],
  controllers: [AudiosController],
  providers: [AudiosService, AuthGuard],
})
export class AudiosModule {}
