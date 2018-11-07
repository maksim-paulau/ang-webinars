import { Injectable } from '@angular/core';
import { IProduct } from '../products/interfaces/product';

@Injectable()
export class CartService {

  private products: IProduct[] = [];

  constructor() { }

  addProduct(product: IProduct): void {
    this.products.push(product);
  }

  clear(): void {
    this.products = [];
  }

  get productsInCart() : IProduct[] {
    return this.products;
  }  
}
