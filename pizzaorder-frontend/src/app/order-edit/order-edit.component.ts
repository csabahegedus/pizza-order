import { Component, OnInit } from '@angular/core';
import { Order } from 'src/domain/order';
import { OrderService } from '../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';

import { OrderStatus } from 'src/domain/order-status';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) { }

  async ngOnInit() {
    const orderId = parseInt(this.route.snapshot.params.id);
    const orderExample = {
      id: 1,
      name: 'Kis Joska',
      address: 'Rakoczi út 23.',
      products: [],
      phone: '+36201234567',
      status: OrderStatus.New,
      createdAt: null,
      modifiedAt: null,
    };
    //this.order = await this.orderService.getOrder(orderId);
    this.order = orderExample;
  }

  async submitOrder(order: Order) {
    order.id = this.order.id;
    await this.orderService.modifyOrder(order);
    this.router.navigate(['/', 'orders']);
  }

}
