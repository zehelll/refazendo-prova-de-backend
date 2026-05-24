declare type Reservas = {
    id: number;
    responsavel: string;
    sala: 'azul' | 'verde' | 'vermelha';
    turno: 'manha' | 'tarde' | 'noite';
    integrantes: number;
    status: 'ativa' | 'confirmada' | 'cancelada' | 'encerrada';
};
export declare class ReservasService {
    private reservas;
    criarReserva(reserva: Reservas): string;
    atualizarParcialmente(id: number, reserva: Reservas): any;
}
export {};
