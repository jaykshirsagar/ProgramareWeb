import { Injectable } from "@angular/core";
import { Product, ProductComponent } from "../product/product.component";
@Injectable({providedIn : "root"})

export class ShoppingService{

    productMap = new Map<Product, number>()
    orders : { text : string, date : string}[] = [];

    addProduct(product : Product){
        if(this.productMap.has(product))
            this.productMap.set(product, this.productMap.get(product)! + 1)
        else
            this.productMap.set(product, 1);
    }

    getProducts(){
        return this.productMap;
    }

    addOrder(products : Map<Product, number>, date : string){
        let text = this.productsToString(products)
        this.orders.push({text, date});
    }

    productsToString(products : Map<Product, number>) : string{
        let arr = Array.from(products.keys());
        let message = '';
    
        arr.forEach(product => {
          message += '•' + product.title + ' x' + products.get(product) + ';\n ';
        });
    
        return message;
      }

    getOrders(){
        return this.orders;
    }
}