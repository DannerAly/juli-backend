import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AudiosService {

  constructor(private prismaService: PrismaService) {}

  create(createAudioDto: CreateAudioDto) {
    return this.prismaService.audios.create({
      data: {
        ...createAudioDto,
        fecha_creacion: new Date()
      }
    });
  }

  findAll() {
    return this.prismaService.audios.findMany();
  }

  findOne(id: number) {
    return this.prismaService.audios.findUnique({
      where: { id_audio: id }
    });
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return this.prismaService.audios.update({
      where: { id_audio: id },
      data: {
        ...updateAudioDto,
      }
    });
  }

  remove(id: number) {
    return this.prismaService.audios.delete({
      where: { id_audio: id }
    });
  }
}
