import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  title : string = '';
  description : string = '';
  price : string = '';

  constructor(private productService : ProductService, private router : Router) { }

  category : string = '';
  photoPath : string = '';
  prodCategories : string [] = [];

  ngOnInit(): void {
    this.prodCategories = this.productService.getCategories();
  }

  add(){
    this.productService.createProduct(this.title, this.description, this.price, this.category, 'assets/resources/' + this.photoPath + '.jpg');
    this.router.navigateByUrl('products');
  }

}
