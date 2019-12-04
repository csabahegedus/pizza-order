import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/domain/order';
import { Product } from 'src/domain/product';
import { FormGroup } from '@angular/forms';
import { OrderStatus} from 'src/domain/order-status';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() order: Order;
  @Output() orderSubmit: EventEmitter<Order> = new EventEmitter();

  statuses = [{
    label: 'New',
    value: 'NEW',
  }, {
    label: 'Doing',
    value: 'DOING',
  }, {
    label: 'Done',
    value: 'DONE',
  }]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (this.order.products.length === 0) {
      this.productService.getProducts();
    }
  }

  async submitOrder(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    const order = form.getRawValue() as Order;
    const productName = order.products.toString();

    const product = this.productService.products.filter(product => {        
      if (product.name === productName) {
        return product;
      }
    });
    order.products = product;
    this.orderSubmit.emit(order);

   //this.orderSubmit.emit(form.getRawValue() as Order);
  }

}
