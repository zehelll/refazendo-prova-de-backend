"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasService = void 0;
const common_1 = require("@nestjs/common");
let ReservasService = class ReservasService {
    constructor() {
        this.reservas = [];
    }
    criarReserva(reserva) {
        if (reserva.responsavel.length == 0 ||
            reserva.sala.length == 0 ||
            reserva.turno.length == 0 ||
            reserva.integrantes == null) {
            throw new common_1.ForbiddenException('Os campos resposanvel, sala, turno e integrantes sao obrigatorios');
        }
        if (!['azul', 'verde', 'vermelha'].includes(reserva.sala)) {
            throw new common_1.ForbiddenException('O campo sala precisa ser azul verde ou vermelha');
        }
        if (!['manha', 'tarde', 'noite'].includes(reserva.turno)) {
            throw new common_1.ForbiddenException('O campo turno precisa ser manha tarde ou noite');
        }
        if (reserva.integrantes < 1 || reserva.integrantes > 6) {
            throw new common_1.ForbiddenException('o numero d integrantes minimo e 1 e no maximo 6');
        }
        if (reserva.id == null) {
            reserva.id = this.reservas.length;
        }
        reserva.status = 'ativa';
        this.reservas.push(reserva);
        return 'reserva criada com sucesso';
    }
    atualizarParcialmente(id, reserva) {
        let reservaProcurada = this.reservas.find((p) => p.id == reserva.id);
        if (!reservaProcurada) {
            throw new common_1.NotFoundException('Reserva nao encontrada');
        }
        if (!reserva) {
            throw new common_1.NotFoundException('vc nao enviou nenhuma reserva para alterar');
        }
        if (reserva.responsavel != reservaProcurada.responsavel ||
            reserva.sala != reservaProcurada.sala ||
            reserva.turno != reservaProcurada.turno) {
            throw new common_1.ForbiddenException('vc nao pode alterar esses campos');
        }
        if (reservaProcurada.integrantes < 1 || reservaProcurada.integrantes > 6) {
            throw new common_1.ForbiddenException('o numero d integrantes minimo e 1 e no maximo 6');
        }
        if (reserva.status == 'encerrada' || reserva.status == 'cancelada') {
            throw new common_1.ForbiddenException('essa reserva nao pode ser alterada');
        }
        const atualizado = Object.assign(Object.assign({}, reservaProcurada), reserva);
        this.reservas = this.reservas.map((p) => (p.id === id ? atualizado : p));
        return atualizado;
    }
};
ReservasService = __decorate([
    common_1.Injectable()
], ReservasService);
exports.ReservasService = ReservasService;
//# sourceMappingURL=reservas.service.js.map