import { Test, TestingModule } from '@nestjs/testing';
import { DocumentosGeneradosService } from './documentos_generados.service';

describe('DocumentosGeneradosService', () => {
  let service: DocumentosGeneradosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentosGeneradosService],
    }).compile();

    service = module.get<DocumentosGeneradosService>(DocumentosGeneradosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
