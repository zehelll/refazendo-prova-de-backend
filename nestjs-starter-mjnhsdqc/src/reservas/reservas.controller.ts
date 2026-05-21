import { Controller, Post, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservas: ReservasService) {}

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

  @Patch()
  atualizarParcialmente(@Param('id', ParseIntPipe) id: number,
  @Body() body: { id: number;
                  responsavel: string;
                  sala: 'azul' | 'verde' | 'vermelha';
                  turno: 'manha' | 'tarde' | 'noite';
                  integrantes: number;
                  status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
},
) {
  return this.reservas.atualizarParcialmente(id, body);
})
}
