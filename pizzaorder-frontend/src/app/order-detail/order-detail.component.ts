import { Component, OnInit } from '@angular/core';
import { Order } from 'src/domain/order';
import { Product } from 'src/domain/product';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

import { OrderStatus } from 'src/domain/order-status';
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  UserRole = UserRole;
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

  editOrder() {
    this.router.navigate(["orders", this.order.id, "edit"]);
  }

}
