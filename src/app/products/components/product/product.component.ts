import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from '../../enums/product-category.enum';
import { IProduct } from '../../interfaces/product';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct; 
  @Input() showBuyBtn: boolean = true; 

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy() {
    console.log('product %s is bought!', this.product.name);
    this.cartService.addProduct(this.product);
  }
}
