import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingService } from '../services/shopping.service';
import { Options } from '@angular-slider/ngx-slider';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  productsOnDisplay : Product [] = [];
  minValue : number = 0;
  maxValue : number = 1000;
  sortCriteriaID : number = 0;
  categoryDisplayed : string = 'glasses';
  pageIndex : number = 0;
  pageSize : number = 8;
  sizeOptions : number[] = [8, 12, 16, 20];
  resultCount = 0;

  sortCriterias = [{
    description : 'Price ascending',
    id : 0
  },
  {
    description : 'Price descending',
    id : 1
  }]

  prodCategories : string[] = []

  options: Options = {
    floor: 0,
    ceil: 50,
    translate: (value: number): string => {
      return '€' + value;
    },
    combineLabels: (minValue: string, maxValue: string): string => {
      return 'from ' + minValue + ' up to ' + maxValue;
    }
  };

  constructor(private productService : ProductService, private shoppingService : ShoppingService) {

   }

  ngOnInit(): void {
    this.prodCategories = this.productService.getCategories();
    this.recalculateResults();
    this.options.floor = this.productService.getPriceRange()[1];
    this.options.ceil = this.productService.getPriceRange()[0];
  }

  addToCart(product : Product){
    this.shoppingService.addProduct(product);
  }

  pageEventHandler(event : PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.recalculateResults();
  }

  recalculateResults(){
    this.resultCount = this.productService.countProductsOfCriteria(this.categoryDisplayed, this.minValue, this.maxValue);
    this.productsOnDisplay = this.productService.getProducts(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize, this.categoryDisplayed,  this.minValue, this.maxValue, this.sortCriteriaID)
  }
}

export interface Product{
  id : number;
  title : string;
  description : string;
  price : number;
  imagePath : string;
  category : string;
}

