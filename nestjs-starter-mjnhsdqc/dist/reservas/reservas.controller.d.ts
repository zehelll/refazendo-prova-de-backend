import { ReservasService } from './reservas.service';
export declare class ReservasController {
    private readonly reservas;
    constructor(reservas: ReservasService);
    criarReserva(novaReserva: {
        id: number;
        responsavel: string;
        sala: 'azul' | 'verde' | 'vermelha';
        turno: 'manha' | 'tarde' | 'noite';
        integrantes: number;
        status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
    }): string;
    atualizarParcialmente(id: number, body: {
        id: number;
        responsavel: string;
        sala: 'azul' | 'verde' | 'vermelha';
        turno: 'manha' | 'tarde' | 'noite';
        integrantes: number;
        status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
    }): any;
}
