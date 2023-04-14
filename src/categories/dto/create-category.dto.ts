import {IsOptional, IsNotEmpty} from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    title:string;

    @IsOptional()
    description?:string
}
