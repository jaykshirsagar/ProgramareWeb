import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HistoryComponent } from './history/history.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'tests',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  },
  {
    path: "products/addnew",
    component: AddProductComponent
  },
  {
    path: 'products/:id',
    component: ItemInfoComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: "**",
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [HomeComponent, PageNotFoundComponent, ProductComponent];
