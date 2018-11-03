import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
