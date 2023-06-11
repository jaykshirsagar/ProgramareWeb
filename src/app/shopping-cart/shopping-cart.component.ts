import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map, toArray } from 'rxjs';
import { Product } from '../product/product.component';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productMap = new Map<Product, number>();
  totalPrice: number = 0;

  constructor(private shoppingService: ShoppingService) {

  }

  removeItem(product: Product) {
      this.productMap.delete(product);
      this.recalculateSum();
  }

  changeQuantity(product: Product, event: any) {
    let value = parseInt(event.target.value)
    if (event.target.value != '') {
      let reg = new RegExp('^[0-9]*$')
      if (reg.test(value.toString())) {
        this.productMap.set(product, value);
        this.recalculateSum();
      }
      else {
        event.target.value = this.productMap.get(product);
      }
    }
  }

  recalculateSum() {
    this.totalPrice = 0;
    let productArray = Array.from(this.productMap.keys());
    for (let i = 0; i < productArray.length; i++) {
      this.totalPrice += productArray[i].price * this.productMap.get(productArray[i])!;
    }
  }

  placeOrder(){
    this.shoppingService.addOrder(new Map(this.productMap), String(new Date()));
    this.productMap.clear();
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this.productMap = this.shoppingService.getProducts();
    this.totalPrice = 0;
    this.recalculateSum();
  }

}
