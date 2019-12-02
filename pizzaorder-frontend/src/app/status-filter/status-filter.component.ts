import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() statusFilter: string = '';
  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: string) {
    this.orderService.filterChange(e);
    this.filterChange.emit(e);
  }

}
