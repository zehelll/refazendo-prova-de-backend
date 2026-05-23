import { BibliotecaService } from './biblioteca.service';
export declare class BibliotecaController {
    private readonly emprestimos;
    constructor(emprestimos: BibliotecaService);
    listarEmprestimos(): {
        id: number;
        usuario: string;
        livro: string;
        dataEmprestimo: string;
        dataDevolucao?: string;
        status: "ativo" | "finalizado" | "atrasado" | "cancelado";
    }[];
    criarEmprestimo(emprestimo: any): any;
    atualizarEmprestimoParcialmente(id: number, emprestimo: any): {
        id: number;
        usuario: string;
        livro: string;
        dataEmprestimo: string;
        dataDevolucao?: string;
        status: "ativo" | "finalizado" | "atrasado" | "cancelado";
    };
}
