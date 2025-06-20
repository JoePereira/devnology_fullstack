import { ProductOrder } from "./ProductOrder";

export interface Order {
  id: string;
  customer: string;
  email: string;
  totalPrice: number;
  products: ProductOrder[];
  createdAt: string;
}