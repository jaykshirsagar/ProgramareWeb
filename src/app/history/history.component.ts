import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  orders : { text : string, date : string}[] = [];

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit(): void {
    this.orders = this.shoppingService.getOrders();
  }

}
