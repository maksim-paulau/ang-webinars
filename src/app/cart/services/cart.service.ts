import { Injectable, Inject } from '@angular/core';
import { IProduct } from '../../products/models/product.interface';
import { CartItem } from '../models/cart-item';
import { LocalStorageService } from '../../core/services';

@Injectable({providedIn: 'root'})
export class CartService {

  private products;
  private quantity;
  private summary;

  constructor(private localStorage: LocalStorageService) {
    this.products = JSON.parse(this.localStorage.getItem('cart')) || [];
    this.quantity = this.products.length ? this.products.map(p => p.quantity).reduce((a, b) => a + b) : 0;
    this.summary = this.products.length ? this.products.map(p => p.quantity * p.price).reduce((a, b) => a + b) : 0;
  }

  addProduct(product: IProduct): void {

    const existingProduct: CartItem = this.products.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.products.push({...product, quantity: 1});
    }

    this.summary += product.price;
    this.quantity++;

    this.updateLocalStorage();
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

    this.updateLocalStorage();
  }

  clear(): void {
    this.products = [];
    this.quantity = 0;

    this.updateLocalStorage();
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

  private updateLocalStorage(): void {
    this.localStorage.setItem('cart', JSON.stringify(this.products));
  }
}
