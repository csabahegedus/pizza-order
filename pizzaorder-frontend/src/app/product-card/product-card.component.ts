import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/domain/product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() private product: Product;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  addToShoppingCart() {
    this.shoppingCartService.addCartItem(this.product);
  }

}
