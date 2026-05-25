import { Controller, Post, Body, Patch, Param, Get, ParseIntPipe } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';

@Controller('biblioteca')
export class BibliotecaController {
    constructor(private readonly emprestimos: BibliotecaService) {}

    @Get()
    listarEmprestimos() {
        return this.emprestimos.listarEmprestimos();
    }

    @Post()
    criarEmprestimo(@Body() emprestimo: any) {
        return this.emprestimos.criarEmprestimo(emprestimo);
    }

    @Patch(':id')
    atualizarEmprestimoParcialmente(
        @Param('id', ParseIntPipe) id: number,
        @Body() emprestimo: any,
    ) {
        return this.emprestimos.atualizarEmprestimoParcialmente(id, emprestimo);
    }
}

