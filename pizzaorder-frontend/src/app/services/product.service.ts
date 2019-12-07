import { Injectable } from '@angular/core';
import { Product } from 'src/domain/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Hawaii pizza',
      description: 'Nagyon finom hawaii pizza.',
      price: 1690,
    },
    {
      id: 2,
      name: 'Salata',
      description: 'Nagyon finom salata.',
      price: 990,
    },
    {
      id: 3,
      name: 'Coca-cola',
      description: 'Nem kell bemutatni.',
      price: 490,
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  async getProducts() {
    const products = await (this.http.get('products').toPromise() as Promise<any[]>);
    this.products = products;
  }

  async getProduct(productId: number): Promise<Product> {
    const product = await (this.http.get(`product/${productId}`).toPromise() as Promise<any>);
    return product;
  }

}
