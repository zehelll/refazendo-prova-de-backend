import { Body } from "@nestjs/common";
import { Max, Min, IsOptional, IsNumber, IsIn, IsString } from "class-validator";

export class updateServicoDto {
    @IsOptional()
    @IsNumber({}, {message: 'O campo horas estimadas deve ser um número'})
    @Min(1, { message: 'O campo horas estimadas deve ser no mínimo 1' })
    @Max(40, { message: 'O campo horas estimadas deve ser no máximo 40' })
    horasEstimadas?: number;

    @IsOptional()
    @IsString({message: 'O campo status deve ser um texto'})
    @IsIn(['aberta', 'em_andamento', 'suspensa', 'concluida'], { message: 'O campo status deve ser uma das opções válidas' })
    status?: string;

    @IsOptional()
    cliente?: string;

    @IsOptional()
    categoria?: 'revisao' | 'mecanica' | 'eletrica';

    @IsOptional()
    prioridade?: 'baixa' | 'media' | 'alta';
}