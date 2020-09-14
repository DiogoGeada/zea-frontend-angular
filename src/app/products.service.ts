import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts():string[]{
    return ['Product one', 'Product 2', 'Product 3'];
  }
}
