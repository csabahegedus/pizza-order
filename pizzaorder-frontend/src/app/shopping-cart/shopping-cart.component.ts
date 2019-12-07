import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from 'src/domain/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.shoppingCartService.loadShoppingCart();
  }

  deleteFromShoppingCart(product: Product) {
    this.shoppingCartService.removeCartItem(product);
  }

  createOrder() {
    
  }

}
