import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.component';
import { ProductService } from '../services/product.service';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

  public id: number = -1;
  currentPhoto : string = '';
  product : Product = {id : -1, title : '', description : '', price : -1, imagePath : '', category : ''}

  constructor(private productServie : ProductService, private route: ActivatedRoute, private shoppingService : ShoppingService) { 
  }

  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id')!);
    this.product = this.productServie.getItemById(this.id)!;
    this.currentPhoto = this.product.imagePath;
  }

  addToCart() : void{
    this.shoppingService.addProduct(this.product);
  }

}
