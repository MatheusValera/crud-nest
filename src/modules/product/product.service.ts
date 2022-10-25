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

  async findById(id: string): Promise<Product> {
    const conn = await this.mysql.getConnection()
    const results = JSON.parse(
      JSON.stringify(
        await conn.query(`select * from products where id = ${id}`),
      ),
    )
    const product: Product[] = results.map((product) => ({
      id: product.id,
      product: product.product,
      price: product.price,
    }))
    return product[0]
  }

  async addProduct(data: Product): Promise<any> {
    const conn = await this.mysql.getConnection()
    const results = JSON.parse(
      JSON.stringify(
        await conn.query(`insert into products (product, price) values (?,?)`, [
          data.product,
          data.price,
        ]),
      ),
    )
    return results
  }

  async dropProduct(id: string): Promise<boolean> {
    const conn = await this.mysql.getConnection()
    const results = JSON.parse(
      JSON.stringify(
        await conn.query(`delete from products where id = ${id} limit 1`),
      ),
    )
    return results
  }
}
