import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductModel } from '../models/product';
import { ProductCategory } from '../enums/product-category.enum';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    let products: ProductModel[] = [];
    
    products.push(...[
      new ProductModel("Pencil", "Grey pencil", 1.99, true, ProductCategory.office, ["pencil"]),
      new ProductModel("Shampoo", "Shampoo Clear", 5.99, true, ProductCategory.shower, ["shampoo, shower"]),
      new ProductModel("Picture", "Picasso Picture", 20.99, false, ProductCategory.house, ["picture", "decor"])
    ]);

    return products;
  }
}
