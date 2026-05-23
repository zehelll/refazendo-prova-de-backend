type Emprestimo = {
    id: number;
    usuario: string;
    livro: string;
    dataEmprestimo: string;
    dataDevolucao?: string;
    status: 'ativo' | 'finalizado' | 'atrasado' | 'cancelado';
};
export declare class BibliotecaService {
    private emprestimos;
    listarEmprestimos(): Emprestimo[];
    criarEmprestimo(emprestimo: any): any;
    atualizarEmprestimoParcialmente(id: number, emprestimo: Partial<Emprestimo>): Emprestimo;
    private formatarData;
}
export {};
