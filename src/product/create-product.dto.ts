import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
   
    id:number

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @IsNotEmpty()
    category: string;
  }
  