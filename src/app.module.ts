import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { AppController } from './app.controller'
import { ProductModule } from './modules/product/product.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [DatabaseModule.forRoot(), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
