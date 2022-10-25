import { Inject, Injectable } from '@nestjs/common'
import { MySQLProvider } from 'src/database/mysql.provider'
import { Product } from './product.entity'

@Injectable()
export class ProductService {
  constructor(@Inject('DATABASE') private readonly mysql: MySQLProvider) {}
  async findAll(): Promise<Product[]> {
    const conn = await this.mysql.getConnection()
    const results = JSON.parse(
      JSON.stringify(await conn.query('select * from products')),
    )
    const products: Product[] = results.map((product) => ({
      id: product.id,
      product: product.product,
      price: product.price,
    }))
    return products
  }
}
