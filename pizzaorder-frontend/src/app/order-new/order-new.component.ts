import { Component, OnInit } from '@angular/core';
import { Order } from 'src/domain/order';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { OrderStatus } from 'src/domain/order-status';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {

  order: Order;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.order = {
      id: null,
      name: '',
      address: '',
      phone: '',
      products: [],
      status: 'NEW' as OrderStatus,
      createdAt: null,
      modifiedAt: null,
    };
  }

  async submitOrder(order: Order) {
    await this.orderService.createOrder(order);
    this.router.navigate(['/', 'orders']);
  }

}
