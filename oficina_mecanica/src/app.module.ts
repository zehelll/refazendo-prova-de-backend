import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OficinaModule } from './oficina/oficina.module';

@Module({
  imports: [OficinaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
