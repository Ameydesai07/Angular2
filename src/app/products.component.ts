/**
 * Created by lt-117 on 20/6/17.
 */
import { Component, Input } from '@angular/core';
import {ProductServices} from "./product.services";

@Component({
  selector : 'products',
  template: `<h2>Products</h2>
<div *ngIf="products.length > 0">
  <div *ngFor="let product of products">
    <product [data]="product"></product>
  </div>
</div>
<div *ngIf="products.length == 0">
<h1> Products are not present </h1>
</div>`,
providers:[ProductServices]
})

export class ProductsComponent {
   products;
   constructor(productService: ProductServices){
     this.products = productService.getProducts();
   }
}
