import { IsNotEmpty, IsString, IsNumber, IsIn, Min, Max, IsOptional } from 'class-validator';

export class createServicoDto {
    @IsOptional()
    @IsNumber({}, {message: 'O campo id deve ser um número'})
    id?: number;

    @IsNotEmpty({ message: 'O campo cliente é obrigatório' })
    @IsString({message: 'O campo cliente deve ser um texto'})
    cliente!: string;

    @IsNotEmpty({ message: 'O campo categoria é obrigatório' })
    @IsString({message: 'O campo categoria deve ser um texto'})
    @IsIn(['revisao', 'mecanica', 'eletrica'], { message: 'O campo categoria deve ser uma das opções válidas' })
    categoria!: string;

    @IsNotEmpty({ message: 'O campo prioridade é obrigatório' })
    @IsString({message: 'O campo prioridade deve ser um texto'})
    @IsIn(['baixa', 'media', 'alta'], { message: 'O campo prioridade deve ser uma das opções válidas' })
    prioridade!: string;

    @IsNotEmpty({ message: 'O campo horas estimadas é obrigatório' })
    @IsNumber({}, {message: 'O campo horas estimadas deve ser um número'})
    @Min(1, { message: 'O campo horas estimadas deve ser no mínimo 1' })
    @Max(40, { message: 'O campo horas estimadas deve ser no máximo 40' })
    horasEstimadas!: number;

    @IsOptional()
    @IsString({message: 'O campo status deve ser um texto'})
    @IsIn(['aberta', 'em_andamento', 'suspensa', 'concluida'], { message: 'O campo status deve ser uma das opções válidas' })
    status?: string = 'aberta';
}