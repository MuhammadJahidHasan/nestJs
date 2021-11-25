import {Controller, Get, Post, HttpCode, Req, Res, Body} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './create-product.dto';
import { ProductService } from './product.service';


@Controller('product')

export class ProductController {
      constructor(private readonly productService: ProductService){}
      @Post()
      @HttpCode(200)
      
      async addProduct(@Body() createProductDto: CreateProductDto, @Res() res) {

          try {
            const data =  await this.productService.addProduct(createProductDto);
              res.json({
                  result: data,
                  msg: 'product added successfully'
              });
          } catch(err) {
              res.status(200).json({
                  error: err
              });
          }
         
      }

      @Get()
      @HttpCode(200)
      async getProduct(@Req() req, @Res() res) {

        try {
          const data =  await this.productService.getProduct();
            res.json({
                result: data,
            });
        } catch(err) {
            res.status(500).json({
                error: err 
            });
        }
       
    }
}