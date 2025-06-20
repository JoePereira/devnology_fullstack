import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/pisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: {
    customer: string;
    email: string;
    totalPrice: number;
    products: {
      name: string;
      price: number;
      quantity: number;
    }[];
  }) {
    return this.prisma.order.create({
      data: {
        customer: data.customer,
        email: data.email,
        totalPrice: data.totalPrice,
        products: {
          create: data.products,
        },
      },
      include: {
        products: true,
      },
    });
  }

   async findOrdersByEmail(email: string) {
    return this.prisma.order.findMany({
      where: {
        email,
      },
      include: {
        products: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
