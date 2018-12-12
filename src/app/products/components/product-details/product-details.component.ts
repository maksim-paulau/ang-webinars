import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product';
import { CartService } from '../../../cart/services/cart.service';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductModel;
  public notFound = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsPromiseService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: Params) => this.productsService.getById(+params.get('id'))))
      .subscribe(product => {
        if (product) {
          this.product = product;
        } else {
          this.notFound = true;
        }
      });
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product);
  }

  onDisplayFeedback(): void {
    this.router.navigate([this.router.routerState.snapshot.url, { outlets: { feedback: ['feedback'] } }]);
  }
}
