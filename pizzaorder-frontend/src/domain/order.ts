import { OrderStatus } from './order-status';

export interface Order {
    id: number;
    name: string;
    address: string;
    products: string;
    phone: string;
    status: OrderStatus;
    createdAt: string;
    modifiedAt: string;
}