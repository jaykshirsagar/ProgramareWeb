import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.component';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: Map<Product, number>, ...args: unknown[]): number {
    let sum = 0;
    let products = Array.from(value.keys());
    products.forEach(product => {
      sum += product.price * value.get(product)!;
    });
    return sum;
  }

}
