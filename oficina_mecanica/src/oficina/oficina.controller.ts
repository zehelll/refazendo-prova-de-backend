import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { OficinaService } from './oficina.service';
import { createServicoDto } from './dto/create-servico.dto';
import { updateServicoDto } from './dto/update-servico.dto';
import { OrdemServico } from './interface/ordemservico.interface';

@Controller('oficina')
export class OficinaController {
    constructor(private readonly servicos: OficinaService) {}

    @Get()
    listarServicos() {
        return this.servicos.listarServicos();
    }

    @Post() 
    criarServico(@Body() servicos: createServicoDto) {
        return this.servicos.criarServico(servicos);
    }

    @Patch(':id')
    atualizarServico(@Param('id', ParseIntPipe) id: number, @Body() servicoAtualizado: updateServicoDto) {
        return this.servicos.atualizarServico(id, servicoAtualizado);
    }
}
