import { Product } from './product.entity'
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id)
  }

  @Post()
  async addProduct(@Body() product: Product): Promise<Product> {
    return this.productService.addProduct(product)
  }

  @Delete(':id')
  async dropProduct(@Param() id: string): Promise<boolean> {
    return this.productService.dropProduct(id)
  }
}
