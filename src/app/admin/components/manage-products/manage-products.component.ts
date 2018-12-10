import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';
import { ProductModel } from 'src/app/products/models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: Promise<ProductModel[]>;

  constructor(private productsService: ProductsPromiseService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onDelete(id: number): void {
    this.productsService.deleteProduct(id);
  }

  onUpdate(product: ProductModel): void {
    this.productsService.updateProduct(product);
  }
}
