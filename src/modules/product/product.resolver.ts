import { Product } from './dto/product'
import { ProductService } from './product.service'
import { Resolver, Query } from '@nestjs/graphql'

@Resolver((of) => Product)
export class ProductResovler {
  constructor(private readonly productService: ProductService) {}

  @Query((returns) => [Product], { name: 'getAllProducts' })
  async getAllProducts(): Promise<Product[]> {
    const products = await this.productService.findAll()
    const productsToReturn = products.map((item) => ({
      product: item.product,
      price: item.price,
      id: item.id,
    }))
    return productsToReturn
  }
}
