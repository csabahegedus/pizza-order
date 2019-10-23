import { Component, OnInit } from '@angular/core';
import { Order } from 'src/domain/order';
import { OrderStatus } from 'src/domain/order-status';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [
    {
      id: 1,
      name: 'Kis Joska',
      address: 'Rakoczi út 23.',
      products: 'Pizza',
      phone: '+36201234567',
      status: OrderStatus.New,
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 2,
      name: 'Alma Ferenc',
      address: 'Jagello utca 46.',
      products: 'Salata',
      phone: '+36301234567',
      status: OrderStatus.Doing,
      createdAt: null,
      modifiedAt: null,
    },
    {
      id: 3,
      name: 'Balogh Tibi',
      address: 'Argo utca 77.',
      products: 'Coca-cola',
      phone: '+36701234567',
      status: OrderStatus.Done,
      createdAt: null,
      modifiedAt: null,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
