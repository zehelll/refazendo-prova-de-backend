import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { timeStamp } from 'console';

type Emprestimo = {
 id: number;
 usuario: string;
 livro: string;
 dataEmprestimo: string; 
 dataDevolucao?: string; 
 status: 'ativo' | 'finalizado' | 'atrasado' | 'cancelado';
};


@Injectable()
export class BibliotecaService {
    private emprestimos: Emprestimo [] = [];

    listarEmprestimos() {
        return this.emprestimos;
    }

    criarEmprestimo(emprestimo: any) {

        if(!emprestimo.usuario || !emprestimo.livro || !emprestimo.dataEmprestimo) {
            throw new BadRequestException('Os campos usuario, livro e dataEmprestimo são obrigatórios');
        }

        let dataEmprestimo = new Date(emprestimo.dataEmprestimo);
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        dataEmprestimo.setHours(0, 0, 0, 0);

        if (dataEmprestimo < hoje) {
            throw new BadRequestException('A data de empréstimo não pode ser anterior a hoje');
        }

        emprestimo.dataEmprestimo = this.formatarData(dataEmprestimo);

        if (!emprestimo.status) {
            emprestimo.status = 'ativo';
        }

        if(!emprestimo.id) {
            emprestimo.id = this.emprestimos.length + 1;
        }

        this.emprestimos.push(emprestimo);
        return emprestimo;
    }

    atualizarEmprestimoParcialmente(id: number, emprestimo: Partial<Emprestimo>) {
        let emprestimoEncontrado = this.emprestimos.find(e => e.id === id);
        if (!emprestimoEncontrado) {
            throw new NotFoundException('Empréstimo não encontrado');
        }
        if (!emprestimo || Object.keys(emprestimo).length === 0) {
            throw new BadRequestException('Corpo de requisicao vazio');
        }
        if (emprestimo.id || emprestimo.usuario || emprestimo.livro || emprestimo.dataEmprestimo) {
            throw new BadRequestException('Os campos id, usuario, livro e dataEmprestimo nao podem ser atualizados');
        }
        if (emprestimoEncontrado.status === 'finalizado' || emprestimoEncontrado.status === 'cancelado') {
            throw new BadRequestException('O status atual do emprestimo nao permite a atualizacao');
        }
        if (emprestimo.dataDevolucao != null || undefined) {
            throw new BadRequestException('Para finalizar um emprestimo, a data de devolucao deve ser informada');
        }
        Object.assign(emprestimoEncontrado, emprestimo);
        return emprestimoEncontrado;
    }

    private formatarData(data: Date): string {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }
}
