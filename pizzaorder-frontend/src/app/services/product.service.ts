import { Injectable } from '@angular/core';
import { Product } from 'src/domain/product';

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

  constructor() { }
}
