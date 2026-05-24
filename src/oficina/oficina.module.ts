import { Module } from '@nestjs/common';
import { OficinaController } from './oficina.controller';
import { OficinaService } from './oficina.service';

@Module({
  controllers: [OficinaController],
  providers: [OficinaService]
})
export class OficinaModule {}
