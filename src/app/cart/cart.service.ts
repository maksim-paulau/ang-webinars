import { Injectable } from '@angular/core';
import { IProduct } from '../products/models/product.interface';

@Injectable()
export class CartService {

  private products: IProduct[] = [];
  private summary: number = 0;

  constructor() { }

  addProduct(product: IProduct): void {
    this.products.push(product);
    product.isAvailable = false;
    this.summary += product.price;
  }

  removeProduct(product: IProduct): void {
    this.products = this.products.filter(p => p !== product);
    this.summary -= product.price;
    product.isAvailable = true;
  }

  clear(): void {
    this.products = [];
  }

  get productsInCart() : IProduct[] {
    return this.products;
  }
  
  get productsQuantity(): number {
    return this.products.length;
  }

  get summaryPrice(): number {
    return this.summary;
  }
}
