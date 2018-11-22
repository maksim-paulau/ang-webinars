import { Injectable } from '@angular/core';
import { IProduct } from '../products/models/product.interface';
import { CartItem } from './models/cart-item';

@Injectable({providedIn: 'root'})
export class CartService {

  private products: CartItem[] = [];
  private summary = 0;
  private quantity = 0;

  constructor() { }

  addProduct(product: IProduct): void {

    const existingProduct: CartItem = this.products.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.products.push({...product, quantity: 1});
    }

    this.summary += product.price;
    this.quantity++;
  }

  removeProduct(product: IProduct): void {
    const existingProduct: CartItem = this.products.find(p => p.id === product.id);

    if (existingProduct.quantity > 1) {
      existingProduct.quantity--;
    } else {
      this.products.splice(this.products.indexOf(existingProduct), 1);
    }

    this.summary -= product.price;
    this.quantity--;
  }

  clear(): void {
    this.products = [];
    this.quantity = 0;
  }

  get productsInCart(): CartItem[] {
    return this.products;
  }

  get productsQuantity(): number {
    return this.quantity;
  }

  get summaryPrice(): number {
    return this.summary;
  }
}
