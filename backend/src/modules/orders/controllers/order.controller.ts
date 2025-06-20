import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OrdersService } from 'src/modules/orders/services/order.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() body: any) {
    return this.ordersService.createOrder(body);
  }

  @Get('by-email')
  async getOrdersByEmail(@Query('email') email: string) {
    return this.ordersService.findOrdersByEmail(email);
  }
}
