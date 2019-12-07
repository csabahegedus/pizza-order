import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { CartItem } from 'src/domain/cart-item';
import { Product } from 'src/domain/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private items: CartItem[] = [];
  private total: number = 0;

  constructor(
    private productService: ProductService
  ) { }

  get cartItems(): CartItem[] {
    return this.items;
  }

  async addCartItem(product: Product) {
    var item: CartItem = {
      product: product,
      quantity: 1
    };

    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));

    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number = -1;

      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = JSON.parse(cart[i]);

        if (item.product.id == product.id) {
          index = i;
          break;
        }
      }

      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));

      } else {
        let item: CartItem = JSON.parse(cart[index]);
        item.quantity += 1;
        
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }

    this.loadShoppingCart();
  }

  loadShoppingCart() {
    this.total = 0;
		this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += item.product.price * item.quantity;
      }
    }
  }

  removeCartItem(product: Product) {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;

		for (var i = 0; i < cart.length; i++) {
      let item: CartItem = JSON.parse(cart[i]);
      
			if (item.product.id == product.id) {
        if (item.quantity == 1) {
          cart.splice(i, 1);
        } else {
          item.quantity -= 1;
          cart[i] = JSON.stringify(item);
        }
        
				break;
			}
    }
    
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadShoppingCart();
  }
  
  clearStorage() {
    localStorage.clear();
  }
}
