export interface OrderPayload {
  customer: string;
  email: string;
  totalPrice: number;
  products: {
    name: string;
    price: number;
    quantity: number;
  }[];
}