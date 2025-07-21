import { Test, TestingModule } from '@nestjs/testing';
import { DocumentosGeneradosController } from './documentos_generados.controller';
import { DocumentosGeneradosService } from './documentos_generados.service';

describe('DocumentosGeneradosController', () => {
  let controller: DocumentosGeneradosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentosGeneradosController],
      providers: [DocumentosGeneradosService],
    }).compile();

    controller = module.get<DocumentosGeneradosController>(DocumentosGeneradosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
