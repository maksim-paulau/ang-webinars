import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { ProductModel } from '../models/product';
import { ProductCategory } from '../product-category.enum';

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor() { }

  getProducts(): Promise<IProduct[]> {
    let products: ProductModel[] = [];
    
    products.push(...[
      new ProductModel(1, "Pencil", "Grey pencil", 1.99, true, ProductCategory.office, ["pencil"]),
      new ProductModel(2, "Shampoo", "Shampoo Clear", 5.99, true, ProductCategory.shower, ["shampoo", "shower"]),
      new ProductModel(3, "Picture", "Picasso Picture", 20.99, true, ProductCategory.house, ["picture", "decor"])
    ]);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    });
  }
}
