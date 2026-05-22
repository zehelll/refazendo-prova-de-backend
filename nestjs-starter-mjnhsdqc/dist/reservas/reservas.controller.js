"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasController = void 0;
const common_1 = require("@nestjs/common");
const reservas_service_1 = require("./reservas.service");
let ReservasController = class ReservasController {
    constructor(reservas) {
        this.reservas = reservas;
    }
    criarReserva(novaReserva) {
        return this.reservas.criarReserva(novaReserva);
    }
    atualizarParcialmente(id, body) {
        return this.reservas.atualizarParcialmente(id, body);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "criarReserva", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "atualizarParcialmente", null);
ReservasController = __decorate([
    common_1.Controller('reservas'),
    __metadata("design:paramtypes", [reservas_service_1.ReservasService])
], ReservasController);
exports.ReservasController = ReservasController;
//# sourceMappingURL=reservas.controller.js.map