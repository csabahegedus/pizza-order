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

  order: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) { }

  async ngOnInit() {
    const orderId = parseInt(this.route.snapshot.params.id);

    const product: Product = {
      id: 1,
        name: 'Hawaii pizza',
        description: 'Nagyon finom hawaii pizza.',
        price: 1690,
    };
    const orderExample = {
      id: 1,
      name: 'Kis Joska',
      address: 'Rakoczi út 23.',
      products: [product],
      phone: '+36201234567',
      status: OrderStatus.New,
      createdAt: null,
      modifiedAt: null,
    };
    //this.order = await this.orderService.getOrder(orderId);
    this.order = orderExample;
  }

  editOrder() {
    this.router.navigate(["orders", this.order.id, "edit"]);
  }

}
