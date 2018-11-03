import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductModel } from '../models/product';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    let products: IProduct[] = [];
    for (let i in [1, 2, 3]) {
      products.push(this.generateTestProduct(Number(i)));
    }
    return products;
  }

  private generateTestProduct(index: number): IProduct {
    let product: IProduct = new ProductModel;
    product.name = "Test Product " + index;
    product.description = "Some text";
    product.price = 1.99;
    product.tags = ["test", "shop", "product"]
    return product;
  }
}
