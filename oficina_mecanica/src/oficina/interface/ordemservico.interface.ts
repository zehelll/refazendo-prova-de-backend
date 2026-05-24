export interface OrdemServico {
    id: number;
    cliente: string;
    categoria: 'revisao' | 'mecanica' | 'eletrica';
    prioridade: 'baixa' | 'media' | 'alta';
    horasEstimadas: number;
    status: 'aberta' | 'em_andamento' | 'suspensa' | 'concluida';
}