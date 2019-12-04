import { Injectable } from '@angular/core';
import { OrderStatus } from 'src/domain/order-status';
import { Order } from 'src/domain/order';
import { Product } from 'src/domain/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  product: Product = {
    id: 1,
      name: 'Hawaii pizza',
      description: 'Nagyon finom hawaii pizza.',
      price: 1690,
  };

  orders: Order[] = [
    {
      id: 1,
      name: 'Kis Joska',
      address: 'Rakoczi út 23.',
      products: [this.product],
      phoneNumber: '+36201234567',
      status: OrderStatus.New,
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 2,
      name: 'Alma Ferenc',
      address: 'Jagello utca 46.',
      products: [this.product],
      phoneNumber: '+36301234567',
      status: OrderStatus.Doing,
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 3,
      name: 'Balogh Tibi',
      address: 'Argo utca 77.',
      products: [this.product],
      phoneNumber: '+36701234567',
      status: OrderStatus.Done,
      createdAt: null,
      modifiedAt: null,
    },
  ];

  filteredOrders: Order[] = this.orders;

  constructor(
    private http: HttpClient
  ) { }

  async getOrders() {
    const orders = await (this.http.get('orders').toPromise() as Promise<any[]>);
    this.filteredOrders = this.orders = orders.map(this.createOrderModel);
  }

  async getOrder(orderId: number): Promise<Order> {
    const order = await (this.http.get(`orders/${orderId}`).toPromise() as Promise<any>);
    return this.createOrderModel(order);
  }

  async createOrder(order: Order): Promise<any> {
    await this.http.post('orders', order).toPromise();
  }

  async modifyOrder(order: Order): Promise<any> {
    await this.http.patch(`orders/${order.id}`, order).toPromise();
  }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredOrders = this.orders;
      } else {
        this.filteredOrders = this.orders.filter(issue => {
          return issue.status === filterValue;
        });
      }
    }
  }

  private createOrderModel(order: any): Order {
    return {
      ...order,
      createdAt: new Date(order.createdAt),
    } as Order;
  }
}
