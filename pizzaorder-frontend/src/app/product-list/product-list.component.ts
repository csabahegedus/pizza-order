import { Component, OnInit } from '@angular/core';
import { Product } from 'src/domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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

  ngOnInit() {
  }

}
