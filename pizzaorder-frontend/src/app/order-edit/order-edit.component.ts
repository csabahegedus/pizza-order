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
    this.order = await this.orderService.getOrder(orderId);
  }

  async submitOrder(order: Order) {
    order.id = this.order.id;
    await this.orderService.modifyOrder(order);
    this.router.navigate(['/', 'orders']);
  }

}
