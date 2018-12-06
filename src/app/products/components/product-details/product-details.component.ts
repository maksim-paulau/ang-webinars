import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { switchMap } from 'rxjs/operators';
import { IProduct } from '../../models/product.interface';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: IProduct;
  public notFound = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
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
