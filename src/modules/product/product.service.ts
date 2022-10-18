import { Injectable } from '@nestjs/common'
import { MySQLProvider } from 'src/database/mysql.provider'

@Injectable()
export class ProductService {
  constructor(private readonly mysql: MySQLProvider) {}
  async findAll(): Promise<any> {
    return [{ id: 1 }, { id: 2 }]
  }
}
