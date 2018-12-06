import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) {}

  ngOnInit() {

    this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsService.getById(+params.get('id'))))
      .subscribe(
        product => this.product = {...product as ProductModel},
        err => console.log(err)
    );
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productsService.updateProduct(product);
    } else {
      this.productsService.createProduct(product);
    }

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
