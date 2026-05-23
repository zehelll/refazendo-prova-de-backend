"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaService = void 0;
const common_1 = require("@nestjs/common");
let BibliotecaService = class BibliotecaService {
    emprestimos = [];
    listarEmprestimos() {
        return this.emprestimos;
    }
    criarEmprestimo(emprestimo) {
        if (!emprestimo.usuario || !emprestimo.livro || !emprestimo.dataEmprestimo) {
            throw new common_1.BadRequestException('Os campos usuario, livro e dataEmprestimo são obrigatórios');
        }
        let dataEmprestimo = new Date(emprestimo.dataEmprestimo);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        dataEmprestimo.setHours(0, 0, 0, 0);
        if (dataEmprestimo < hoje) {
            throw new common_1.BadRequestException('A data de empréstimo não pode ser anterior a hoje');
        }
        emprestimo.dataEmprestimo = this.formatarData(dataEmprestimo);
        if (!emprestimo.status) {
            emprestimo.status = 'ativo';
        }
        if (!emprestimo.id) {
            emprestimo.id = this.emprestimos.length + 1;
        }
        this.emprestimos.push(emprestimo);
        return emprestimo;
    }
    atualizarEmprestimoParcialmente(id, emprestimo) {
        let emprestimoEncontrado = this.emprestimos.find(e => e.id === id);
        if (!emprestimoEncontrado) {
            throw new common_1.NotFoundException('Empréstimo não encontrado');
        }
        if (!emprestimo || Object.keys(emprestimo).length === 0) {
            throw new common_1.BadRequestException('Corpo de requisicao vazio');
        }
        if (emprestimo.id || emprestimo.usuario || emprestimo.livro || emprestimo.dataEmprestimo) {
            throw new common_1.BadRequestException('Os campos id, usuario, livro e dataEmprestimo nao podem ser atualizados');
        }
        if (emprestimoEncontrado.status === 'finalizado' || emprestimoEncontrado.status === 'cancelado') {
            throw new common_1.BadRequestException('O status atual do emprestimo nao permite a atualizacao');
        }
        if (emprestimo.dataDevolucao != null || undefined) {
            throw new common_1.BadRequestException('Para finalizar um emprestimo, a data de devolucao deve ser informada');
        }
        Object.assign(emprestimoEncontrado, emprestimo);
        return emprestimoEncontrado;
    }
    formatarData(data) {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }
};
exports.BibliotecaService = BibliotecaService;
exports.BibliotecaService = BibliotecaService = __decorate([
    (0, common_1.Injectable)()
], BibliotecaService);
//# sourceMappingURL=biblioteca.service.js.map