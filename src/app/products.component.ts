import {Component} from '@angular/core'
import {ProductService} from './product.service'

@Component({
    selector: 'products',
    template: `<h3>Products template</h3>
    <div *ngFor='let product of products'>
            <product [data]='product'></product>
        </div>`
})

export class ProductsComponent{
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }

}