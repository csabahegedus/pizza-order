import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/domain/order';
import { Product } from 'src/domain/product';
import { FormGroup } from '@angular/forms';
import { OrderStatus} from 'src/domain/order-status';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CartItem } from 'src/domain/cart-item';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() mode: 'create' | 'edit';
  @Input() order: Order;
  @Output() orderSubmit: EventEmitter<Order> = new EventEmitter();

  cartItems: CartItem[] = [];

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
    private productService: ProductService,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    if (this.order.products.length === 0) {
      //this.productService.getProducts();
      this.cartItems = this.shoppingCartService.cartItems;
    }
  }

  async submitOrder(form: FormGroup) {
    if (!form.valid) {
      console.log("NOT VALID:")
      return;
    }
    const order = form.getRawValue() as Order;

    let products: Product[] = [];
    this.cartItems.forEach( item => {
      for (let index = 0; index < item.quantity; index++) {
        products.push(item.product);
      }
    });

    order.products = products;
    console.log(order);
    this.orderSubmit.emit(order);
    this.shoppingCartService.clearStorage();
  }

}
