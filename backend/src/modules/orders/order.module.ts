import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/order.controller';
import { OrdersService } from './services/order.service';
import { PrismaService } from 'prisma/pisma.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}
