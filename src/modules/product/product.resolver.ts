import { Product } from './dto/product'
import { ProductService } from './product.service'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { ProductInput } from './dto/product.input'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Product)
export class ProductResovler {
  constructor(private readonly productService: ProductService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Product, { name: 'createProduct' })
  async createProduct(@Args('input') input: ProductInput): Promise<Product> {
    return this.productService.addProduct(input)
  }
}
