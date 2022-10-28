import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductResovler } from './product.resolver'
import { ProductController } from './product.controller'

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductResovler],
})
export class ProductModule {}
