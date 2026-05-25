import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { OrdemServico } from 'src/oficina/interface/ordemservico.interface';
import { createServicoDto } from './dto/create-servico.dto';
import { updateServicoDto } from './dto/update-servico.dto';

@Injectable()
export class OficinaService {
    servicos: OrdemServico[] = [];

    listarServicos() {
        return this.servicos;
    }

    criarServico(servico: createServicoDto) {
        if(!servico.id) {
            servico.id = this.servicos.length + 1;
        }
        
        this.servicos.push(servico as OrdemServico);

        return 'Serviço criado com sucesso!';
    }

    atualizarServico(id: number, servicoAtualizado: updateServicoDto) {
        const servico = this.servicos.find(s => s.id === id);

        if (!servico) {
            throw new NotFoundException('Serviço não encontrado!');
        }

        if (servico.status === 'concluida' || servico.status === 'suspensa') {
            throw new BadRequestException('Serviço não pode ser atualizado!');
        }

        if(servicoAtualizado.cliente || servicoAtualizado.categoria || servicoAtualizado.prioridade) {
            throw new BadRequestException('Não é permitido atualizar cliente, categoria ou prioridade!');
        }

        for (const [chave, valor] of Object.entries(servicoAtualizado)) {
            if (valor !== undefined) {
                (servico as any)[chave] = valor;
            }
        }

        return 'Serviço atualizado com sucesso!';
    }
}
