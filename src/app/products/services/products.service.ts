import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductModel } from '../models/product';
import { ProductCategory } from '../product-category.enum';

@Injectable({providedIn: 'root'})
export class ProductsService {

  private products: IProduct[] = [
    new ProductModel(1, 'Pencil', 'Grey pencil', 1.99, true, ProductCategory.office, ['pencil']),
    new ProductModel(2, 'Shampoo', 'Shampoo Clear', 5.99, true, ProductCategory.shower, ['shampoo', 'shower']),
    new ProductModel(3, 'Picture', 'Picasso Picture', 20.99, true, ProductCategory.house, ['picture', 'decor'])
  ];

  private productsPromise = Promise.resolve(this.products);

  constructor() { }

  getProducts(): Promise<IProduct[]> {
    return this.productsPromise;
  }

  getById(id: number): Promise<IProduct> {
    return this.productsPromise
      .then(products => products.find(p => p.id === id));
  }

  createProduct(product: ProductModel): void {
    this.products.push(product);
  }

  updateProduct(product: ProductModel): void {
    const i = this.products.findIndex(t => t.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1, product);
    }
  }

  deleteProduct(id: number): void {
    this.getById(id).then(product => {
      this.products.splice(this.products.indexOf(product), 1);
    });
  }
}
