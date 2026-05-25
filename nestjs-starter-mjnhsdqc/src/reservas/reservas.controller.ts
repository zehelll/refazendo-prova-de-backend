import { Controller, Post, Body, Patch, Param, ParseIntPipe, Get } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservas: ReservasService) {}

  @Get()
  listarReservas() {
    return this.reservas.listarReservas();
  }

  @Post()
  criarReserva(
    @Body()
    novaReserva: {
      id: number;
      responsavel: string;
      sala: 'azul' | 'verde' | 'vermelha';
      turno: 'manha' | 'tarde' | 'noite';
      integrantes: number;
      status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
    },
  ) {
    return this.reservas.criarReserva(novaReserva);
  }

  @Patch(':id')
  atualizarParcialmente(@Param('id', ParseIntPipe) id: number,
  @Body() body: any,
) {
  return this.reservas.atualizarParcialmente(id, body);
}
}
