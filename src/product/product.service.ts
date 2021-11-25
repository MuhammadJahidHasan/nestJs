import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/product.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "./create-product.dto";


@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>) {}
       
     addProduct(product: CreateProductDto): Promise<Product> {
        const p = this.productRepo.save(product);
        return p;
    }    

    getProduct(): Promise<Product[]>  {
        return this.productRepo.find();
    }
}