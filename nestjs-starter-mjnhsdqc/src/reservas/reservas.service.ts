import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { ReservasController } from './reservas.controller';

type Reservas = {
  id: number;
  responsavel: string;
  sala: 'azul' | 'verde' | 'vermelha';
  turno: 'manha' | 'tarde' | 'noite';
  integrantes: number;
  status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
};

@Injectable()
export class ReservasService {
  private reservas: Reservas[] = [];

  criarReserva(reserva: Reservas) {
    if (
      reserva.responsavel.length == 0 ||
      reserva.sala.length == 0 ||
      reserva.turno.length == 0 ||
      reserva.integrantes == null
    ) {
      throw new ForbiddenException(
        'Os campos resposanvel, sala, turno e integrantes sao obrigatorios',
      );
    }
    if (!reserva.sala) {
      throw new ForbiddenException(
        'O campo sala precisa ser azul verde ou vermelha',
      );
    }
    if (!reserva.turno) {
      throw new ForbiddenException(
        'O campo turno precisa ser manha tarde ou noite',
      );
    }
    if (reserva.integrantes < 1 || reserva.integrantes > 6) {
      throw new ForbiddenException(
        'o numero d integrantes minimo e 1 e no maximo 6',
      );
    }

    if (reserva.id == null) {
      reserva.id = this.reservas.length;
    }
    reserva.status = 'ativa';

    this.reservas.push(reserva);

    return 'reserva criada com sucesso';
  }

  atualizarParcialmente(id: number, reserva: Reservas) {
    let reservaProcurada = this.reservas.find((p) => p.id == reserva.id);
    if (!reservaProcurada) {
      throw new NotFoundException('Reserva nao encontrada');
    }
    if (!reserva) {
      throw new NotFoundException('vc nao enviou nenhuma reserva para alterar');
    }
    if (
      reserva.responsavel != reservaProcurada.responsavel ||
      reserva.sala != reservaProcurada.sala ||
      reserva.turno != reservaProcurada.turno
    ) {
      throw new ForbiddenException('vc nao pode alterar esses campos');
    }
    if (reservaProcurada.integrantes < 1 || reservaProcurada.integrantes > 6) {
      throw new ForbiddenException(
        'o numero d integrantes minimo e 1 e no maximo 6',
      );
    }
    if (reserva.status == 'encerrada' || reserva.status == 'cancelada') {
      throw new ForbiddenException('essa reserva nao pode ser alterada');
    }
  }
}
