import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {observable, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions: Observable<any[]> = new Observable<any[]>();

  ngOnInit() {
    this.options = [];
    this.productService.getAllProducts().forEach(product=>{
      this.options.push({title : product.title, id : product.id});
    return '';
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  constructor(private productService : ProductService, private router : Router){

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.title.toLowerCase().includes(filterValue)).slice(0, 4);
  }

  accessItem(id : number){
    setTimeout(() =>this.router.navigateByUrl('products/' + id));
  }

}
