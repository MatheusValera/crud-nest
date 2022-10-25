import { MySQLProvider } from './mysql.provider'
import { DynamicModule, Global, Module } from '@nestjs/common'

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const connectionFactory = {
      provide: 'DATABASE',
      useFactory: () => {
        return new MySQLProvider()
      },
    }
    return {
      module: DatabaseModule,
      providers: [connectionFactory],
      exports: ['DATABASE'],
    }
  }
}
